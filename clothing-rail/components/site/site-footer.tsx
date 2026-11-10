const COLUMNS = [
  {
    title: "Rail",
    links: [
      { href: "#rail", label: "Autumn rail" },
      { href: "#cloth", label: "Cloth & fit" },
      { href: "#letter", label: "Season letter" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "#cloth", label: "Sizing" },
      { href: "#studio", label: "Repairs" },
      { href: "mailto:hello@halfmoor.example", label: "hello@halfmoor.example" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid gap-10 border-t border-background/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl leading-none tracking-tight">Halfmoor</p>
            <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-background/60">
              Four pieces a season, made once. Free repairs for as long as the cloth holds.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rounded-sm text-background/85 outline-none transition-colors hover:text-background focus-visible:ring-2 focus-visible:ring-background/60 motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-background/15 py-6 text-xs text-background/55">
          <p>© 2026 Halfmoor Clothing Ltd.</p>
          <p>Prices in USD. Duties included.</p>
        </div>
      </div>
    </footer>
  );
}
