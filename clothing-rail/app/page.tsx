import { RailHero } from "@/components/site/rail-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Statement } from "@/components/site/statement";
import { StudioBand } from "@/components/site/studio-band";
import { Values } from "@/components/site/values";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <h1 className="sr-only">Halfmoor: ten pieces a season, made once</h1>
        <RailHero />
        <Statement />
        <Values />
        <StudioBand />
      </main>
      <SiteFooter />
    </div>
  );
}
