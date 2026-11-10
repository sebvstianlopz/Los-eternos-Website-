"use client";

import { ArrowRight } from "lucide-react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { RAIL_DEMO_ITEMS } from "@/components/ui/product-rail-gallery-demo";

/* The rail component is upstream code, so its heading is restyled from the outside. */
const HERO_CLASSES = [
  "flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 flex-col justify-center",
  "[&>header]:gap-4 [&>header]:pt-10 sm:[&>header]:pt-8",
  "[&>header>p]:tracking-[0.22em]",
  "[&_h2]:max-w-[16ch] [&_h2]:text-[clamp(2.5rem,5.4vw,4.5rem)] [&_h2]:font-normal [&_h2]:leading-[0.98] [&_h2]:tracking-[-0.02em] lg:[&_h2]:max-w-none",
].join(" ");

export function RailHero() {
  return (
    <ClothingRailHero
      id="rail"
      items={RAIL_DEMO_ITEMS}
      hanger="none"
      autoplay
      interval={2800}
      eyebrow="Autumn rail · Ten pieces"
      heading="Ten pieces, made once."
      caption="Brush along the rail, slide a hanger, lift a piece to see the back."
      className={HERO_CLASSES}
      action={
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
      }
    />
  );
}
