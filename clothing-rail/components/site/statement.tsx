const FACTS = [
  { value: "4", label: "pieces on each season's rail" },
  { value: "2", label: "mills we buy cloth from" },
  { value: "22", label: "people in the one workshop" },
  { value: "2019", label: "first run: a single tee" },
];

export function Statement() {
  return (
    <section aria-labelledby="statement-title" className="border-t border-border">
      <div className="mx-auto grid max-w-[90rem] gap-x-12 gap-y-8 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:col-span-3 lg:pt-3">
          House rule
        </p>
        <div className="lg:col-span-9">
          <h2
            id="statement-title"
            className="max-w-[24ch] text-balance text-[clamp(1.875rem,3.6vw,3.25rem)] leading-[1.08] tracking-[-0.015em]"
          >
            We make one rail a season. When a size is gone, it is gone until the cloth comes{" "}
            <em className="text-madder">round again.</em>
          </h2>
          <p className="mt-8 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground">
            Halfmoor began with one heavyweight tee and a borrowed cutting table. We still work in
            that order: choose the cloth first, draw the piece around it, then price it so the
            people who sewed it are paid properly. There is no drop calendar and no sale rail in
            January.
          </p>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse justify-end gap-1.5">
                <dt className="max-w-[18ch] text-[13px] leading-snug text-muted-foreground">{fact.label}</dt>
                <dd className="font-display text-4xl leading-none tabular-nums tracking-tight">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
