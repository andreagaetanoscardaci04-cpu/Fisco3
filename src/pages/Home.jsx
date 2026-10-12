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
import { RITMO_CHIARO } from "../components/ui/Section.jsx";

// Sezioni chiare dopo la sezione cartelle: alternano Carta e Pietra, e le
// nascoste (dati mancanti) non rompono l'alternanza.
const AFTER_CARTELLE = [
  { key: "why", Component: WhyUs, visible: true },
  { key: "team", Component: Team, visible: hasTeam },
  { key: "reviews", Component: Reviews, visible: hasReviews },
  { key: "pricing", Component: Pricing, visible: hasPricing },
].filter((s) => s.visible);

// Ritmo: hero, Pietra (selettore), Carta (linea del tempo: i numeri ocra
// restano leggibili solo su Carta), cartelle (scura), Carta, ..., CTA finale
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Needs bg="pietra" />
      <HowItWorks bg="carta" />
      <CartelleBanner />
      {AFTER_CARTELLE.map(({ key, Component }, i) => (
        <Component key={key} bg={RITMO_CHIARO[i % 2]} />
      ))}
      <FinalCta />
    </>
  );
}
