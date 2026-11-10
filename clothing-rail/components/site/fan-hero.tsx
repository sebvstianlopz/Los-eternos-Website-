import { ArrowRight } from "lucide-react";
import { Carousel360 } from "@/components/ui/image-fan-carousel";

export function FanHero() {
  return (
    <section
      id="rail"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 70% at 72% 45%, color-mix(in oklab, var(--color-foreground) 6%, transparent), transparent 65%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-4 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 lg:py-16">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Autumn rail · Four pieces
          </p>
          <h2
            id="hero-heading"
            className="font-display max-w-[14ch] text-balance text-[clamp(2.75rem,5.6vw,5rem)] font-normal leading-[0.98] tracking-[-0.02em]"
          >
            Four pieces, made once.
          </h2>
          <p className="max-w-[40ch] text-[15px] leading-relaxed text-muted-foreground">
            A poplin shirt, a mauve long-sleeve, a heavyweight tee and a cobalt sweatshirt. Cut in
            one run, and gone when the cloth runs out.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <a
              href="#letter"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground outline-none transition-transform hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Get first pick of the rail
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="#cloth"
              className="rounded-sm text-sm text-muted-foreground underline decoration-border decoration-1 underline-offset-[6px] outline-none transition-colors hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
            >
              How it is made
            </a>
          </div>
        </div>
        <Carousel360 />
      </div>
    </section>
  );
}
