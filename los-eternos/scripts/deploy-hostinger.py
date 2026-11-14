#!/usr/bin/env python3
"""Publish the built site (dist/) to the Hostinger hosting plan.

    npm run build
    HOSTINGER_API_TOKEN=... python3 scripts/deploy-hostinger.py

Steps, all through Hostinger's API (developers.hostinger.com):
  1. zip dist/ (including .htaccess)
  2. upload the zip to the website's folder (TUS upload, 10 MB chunks)
  3. deploy it: Hostinger unpacks it and replaces the website's files
  4. clear the CDN cache so visitors get the new version

The token is read from HOSTINGER_API_TOKEN and only sent to Hostinger. Never commit it.
(Where a network proxy adds the token itself, the variable can be left unset.)
"""
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.parse
import zipfile

USERNAME = 'u676690450'
DOMAIN = 'eternoscarrental.com'
API = 'https://developers.hostinger.com/api/hosting/v1'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
CHUNK = 10 * 1024 * 1024


def curl(args, secrets=''):
    """Run curl with secret headers passed as a config on stdin (never on the command line)."""
    token = os.environ.get('HOSTINGER_API_TOKEN')
    if token and any(a.startswith(API) for a in args):
        secrets += f'header = "Authorization: Bearer {token}"\n'
    r = subprocess.run(['curl', '-sS', '-m', '300', '-K', '-'] + args, input=secrets.encode(), capture_output=True)
    if r.returncode:
        sys.exit('curl failed: ' + r.stderr.decode(errors='replace')[:300])
    return r.stdout.decode(errors='replace')


def api(method, path, body=None):
    args = ['-X', method, f'{API}{path}', '-H', 'accept: application/json', '-w', '\n%{http_code}']
    if body is not None:
        args += ['-H', 'content-type: application/json', '--data', json.dumps(body)]
    out = curl(args)
    text, _, code = out.rpartition('\n')
    if not code.startswith('2'):
        sys.exit(f'{method} {path} failed ({code}): {text[:300]}')
    return json.loads(text) if text.strip() else {}


def main():
    if not os.path.exists(os.path.join(DIST, 'index.html')):
        sys.exit('dist/ is missing: run `npm run build` first')

    # 1. Zip the build.
    name = f'site-{time.strftime("%Y%m%d-%H%M%S")}.zip'
    archive = os.path.join(tempfile.mkdtemp(), name)
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as z:
        for folder, _, files in os.walk(DIST):
            for f in files:
                full = os.path.join(folder, f)
                z.write(full, os.path.relpath(full, DIST))
    size = os.path.getsize(archive)
    print(f'zipped dist/ -> {name} ({size // 1024} KB)')

    # 2. Upload it to the website's folder.
    cred = api('POST', '/files/upload-urls', {'username': USERNAME, 'domain': DOMAIN})
    target = f"{cred['url'].rstrip('/')}/{urllib.parse.quote(name)}?override=true"
    auth = f'header = "X-Auth: {cred["auth_key"]}"\nheader = "X-Auth-Rest: {cred["rest_auth_key"]}"\n'
    code = curl(['-X', 'POST', target, '-H', f'upload-length: {size}', '-H', 'upload-offset: 0',
                 '-H', 'Tus-Resumable: 1.0.0', '-o', '/dev/null', '-w', '%{http_code}'], auth).strip()
    if code != '201':
        sys.exit(f'upload could not start ({code})')
    offset = 0
    with open(archive, 'rb') as f:
        while offset < size:
            f.seek(offset)
            part = archive + '.part'
            with open(part, 'wb') as p:
                p.write(f.read(CHUNK))
            head = curl(['-X', 'PATCH', target, '-H', 'Tus-Resumable: 1.0.0', '-H', f'Upload-Offset: {offset}',
                         '-H', 'Content-Type: application/offset+octet-stream', '--data-binary', '@' + part,
                         '-D', '-', '-o', '/dev/null'], auth)
            os.remove(part)
            new = [l.split(':', 1)[1].strip() for l in head.split('\r\n') if l.lower().startswith('upload-offset:')]
            if not new:
                sys.exit('upload failed part-way')
            offset = int(new[0])
            print(f'uploaded {offset * 100 // size}%')
    os.remove(archive)

    # 3. Deploy: Hostinger unpacks the zip and replaces the website's files.
    api('POST', f'/accounts/{USERNAME}/websites/{DOMAIN}/deploy', {'archive_path': name})
    print('deploy requested')

    # 4. Clear the CDN cache.
    time.sleep(20)
    api('DELETE', f'/accounts/{USERNAME}/websites/{DOMAIN}/cdn/purge')
    print(f'CDN cache cleared. Live at https://{DOMAIN}')


if __name__ == '__main__':
    main()
