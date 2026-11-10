import { ShoppingBag } from "lucide-react";

const LINKS = [
  { href: "#rail", label: "The rail" },
  { href: "#cloth", label: "Cloth & fit" },
  { href: "#studio", label: "Studio" },
  { href: "#letter", label: "Season letter" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.375rem] leading-none tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          Halfmoor
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] text-muted-foreground">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Bag, 0 items"
          className="-mr-2 inline-flex h-10 items-center gap-2 rounded-full px-3 text-[13px] outline-none transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
        >
          <ShoppingBag aria-hidden="true" className="size-4" strokeWidth={1.6} />
          <span>Bag</span>
          <span className="tabular-nums text-muted-foreground">0</span>
        </button>
      </div>
    </header>
  );
}
