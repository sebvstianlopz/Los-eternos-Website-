"use client";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { RAIL_DEMO_ITEMS } from "@/components/ui/product-rail-gallery-demo";
import { SiteHeader } from "@/components/site/site-header";
import { Statement } from "@/components/site/statement";

const items = RAIL_DEMO_ITEMS.map((item) => ({ ...item, image: undefined, backImage: undefined, sideImage: undefined }));
const HERO = [
  "flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 flex-col justify-center",
  "[&>header]:gap-4 [&>header]:pt-10 sm:[&>header]:pt-8",
  "[&>header>p]:tracking-[0.22em]",
  "[&_h2]:max-w-[16ch] [&_h2]:text-[clamp(2.5rem,5.4vw,4.5rem)] [&_h2]:font-normal [&_h2]:leading-[0.98] [&_h2]:tracking-[-0.02em] lg:[&_h2]:max-w-none",
].join(" ");
export default function Verify() {
  return (
    <div>
      <SiteHeader />
      <ClothingRailHero items={items} hanger="wood" autoplay eyebrow="Autumn rail · Ten pieces" heading="Ten pieces, made once." caption="Brush along the rail, slide a hanger, lift a piece to see the back." className={HERO}
        action={<a href="#letter" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">Get first pick of the rail</a>} />
      <Statement />
    </div>
  );
}
