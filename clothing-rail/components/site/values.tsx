const VALUES = [
  {
    key: "Cloth",
    title: "Heavy enough to hang straight",
    body: "Jersey and fleece are knitted in Leicester from organic cotton at 240 and 400 gsm. The shirting poplin comes from a mill we visit every spring, before a single pattern is drawn.",
    spec: ["240 gsm jersey", "400 gsm fleece", "Cotton poplin"],
  },
  {
    key: "Fit",
    title: "Graded on people, not scaled",
    body: "Regular through the body with a slightly dropped shoulder, cut XS to XXL on six fit models instead of scaled up from a medium. Everything is garment-washed, so the size you buy is the size it stays.",
    spec: ["XS to XXL", "Garment-washed", "Under 2% shrinkage"],
  },
  {
    key: "Made",
    title: "One workshop, outside Porto",
    body: "Cut and sewn by the same 22-person workshop since our first run. The care label carries the month the piece was made and the initials of the line that finished it.",
    spec: ["Runs of 300 to 600", "Dated care label", "Free repairs"],
  },
];

export function Values() {
  return (
    <section id="cloth" aria-labelledby="values-title" className="border-t border-border bg-card">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="values-title" className="text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
            Cloth, fit, and where it is made
          </h2>
          <p className="text-[13px] text-muted-foreground">Three things we will not hurry.</p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {VALUES.map((value, index) => (
            <li key={value.key} className="flex flex-col bg-card p-6 sm:p-8">
              <p className="flex items-baseline justify-between text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <span>{value.key}</span>
                <span aria-hidden="true" className="font-mono tracking-normal">
                  0{index + 1}
                </span>
              </p>
              <h3 className="mt-10 text-2xl leading-[1.15] tracking-[-0.01em]">{value.title}</h3>
              <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">{value.body}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {value.spec.map((item) => (
                  <li key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
