import Hero from "../components/home/Hero.jsx";
import TrustStrip from "../components/home/TrustStrip.jsx";
import Needs from "../components/home/Needs.jsx";
import CartelleBanner from "../components/home/CartelleBanner.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import Team, { hasTeam } from "../components/home/Team.jsx";
import Reviews, { hasReviews } from "../components/home/Reviews.jsx";
import Pricing, { hasPricing } from "../components/home/Pricing.jsx";
import FinalCta from "../components/home/FinalCta.jsx";

// Sezioni dopo il banner cartelle: le nascoste (dati mancanti) non
// rompono l'alternanza degli sfondi.
const SECTIONS = [
  { key: "how", Component: HowItWorks, visible: true },
  { key: "why", Component: WhyUs, visible: true },
  { key: "team", Component: Team, visible: hasTeam },
  { key: "reviews", Component: Reviews, visible: hasReviews },
  { key: "pricing", Component: Pricing, visible: hasPricing },
].filter((s) => s.visible);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Needs bg="white" />
      <CartelleBanner />
      {SECTIONS.map(({ key, Component }, i) => (
        <Component key={key} bg={i % 2 === 0 ? "tint" : "white"} />
      ))}
      <FinalCta />
    </>
  );
}
