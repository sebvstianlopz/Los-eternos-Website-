"use client";

import { ArrowRight } from "lucide-react";
import ClothingRailHero, { type RailGarment } from "@/components/ui/product-rail-gallery";

const RAIL_ITEMS: RailGarment[] = [
  {
    id: "white-shirt",
    name: "Poplin shirt · White",
    kind: "shirt",
    color: "#F2F2F0",
    tag: "$84",
    description: "Crisp cotton poplin with a point collar and a long, tuckable tail.",
    details: ["Cotton poplin", "Point collar", "Mother-of-pearl buttons"],
    image: "/garments/white-shirt.webp",
  },
  {
    id: "mauve-longsleeve",
    name: "Long-sleeve crew · Mauve",
    kind: "knit",
    color: "#8A6A6E",
    tag: "$56",
    description: "Heathered mauve jersey with a narrow rib collar. The one you reach for first.",
    details: ["220 gsm jersey", "Slim through the body", "Rib collar"],
    image: "/garments/mauve-longsleeve.webp",
  },
  {
    id: "sand-tee",
    name: "Heavyweight tee · Sand",
    kind: "tee",
    color: "#B9A46A",
    tag: "$48",
    description: "Boxy 240 gsm cotton in a washed sand, with a taped neck that keeps its shape.",
    details: ["240 gsm", "Boxy fit", "Taped neck"],
    image: "/garments/sand-tee.webp",
  },
  {
    id: "cobalt-sweatshirt",
    name: "Crewneck sweatshirt · Cobalt",
    kind: "knit",
    color: "#1F5FC4",
    tag: "$78",
    description: "Loopback fleece in a saturated cobalt, with deep ribbed cuffs and hem.",
    details: ["400 gsm loopback", "Ribbed trims", "Garment-dyed"],
    image: "/garments/cobalt-sweatshirt.webp",
  },
];

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
      items={RAIL_ITEMS}
      hanger="wood"
      autoplay
      interval={2800}
      eyebrow="Autumn rail · Four pieces"
      heading="Four pieces, made once."
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
