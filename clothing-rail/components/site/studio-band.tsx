import { LetterForm } from "@/components/site/letter-form";

export function StudioBand() {
  return (
    <section aria-label="Studio and season letter" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[90rem] gap-px px-5 sm:px-8 lg:grid-cols-2">
        <div id="studio" className="scroll-mt-14 py-16 md:py-24 lg:pr-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">Studio</p>
          <h2 className="mt-6 max-w-[14ch] text-balance text-4xl leading-[1.05] tracking-[-0.015em] sm:text-5xl">
            The rail is real. Come and handle it.
          </h2>
          <dl className="mt-10 grid max-w-md grid-cols-[5.5rem_1fr] gap-x-6 gap-y-4 text-[15px] leading-relaxed">
            <dt className="text-background/60">Where</dt>
            <dd>Unit 6, Dye House Yard, Hebden Bridge</dd>
            <dt className="text-background/60">Open</dt>
            <dd>Thursday to Saturday, 11 to 6</dd>
            <dt className="text-background/60">Bring</dt>
            <dd>Anything of ours that needs a button, a darn or a new cuff</dd>
          </dl>
        </div>
        <div
          id="letter"
          className="scroll-mt-14 border-t border-background/15 py-16 md:py-24 lg:border-l lg:border-t-0 lg:pl-16"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">Season letter</p>
          <h2 className="mt-6 max-w-[16ch] text-balance text-4xl leading-[1.05] tracking-[-0.015em] sm:text-5xl">
            First pick, two days before the site.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-background/70">
            Each letter shows the ten pieces, the cloth they are cut from and how many of each
            size we made. Readers can order 48 hours before the rail goes public.
          </p>
          <div className="mt-8 max-w-md">
            <LetterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
