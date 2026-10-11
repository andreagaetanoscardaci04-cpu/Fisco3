import Hero from "../components/home/Hero.jsx";
import TrustStrip from "../components/home/TrustStrip.jsx";
import Needs from "../components/home/Needs.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Team, { hasTeam } from "../components/home/Team.jsx";
import Reviews, { hasReviews } from "../components/home/Reviews.jsx";
import Pricing, { hasPricing } from "../components/home/Pricing.jsx";
import FinalCta from "../components/home/FinalCta.jsx";

// Le sezioni nascoste (dati mancanti) non devono rompere l'alternanza
// degli sfondi: il colore viene assegnato solo a quelle visibili.
const SECTIONS = [
  { key: "needs", Component: Needs, visible: true },
  { key: "how", Component: HowItWorks, visible: true },
  { key: "team", Component: Team, visible: hasTeam },
  { key: "reviews", Component: Reviews, visible: hasReviews },
  { key: "pricing", Component: Pricing, visible: hasPricing },
].filter((s) => s.visible);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      {SECTIONS.map(({ key, Component }, i) => (
        <Component key={key} bg={i % 2 === 0 ? "carta" : "bianco"} />
      ))}
      <FinalCta />
    </>
  );
}
