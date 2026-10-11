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
import { TEMA_SITO, isNuovaPalette, RITMO_CHIARO } from "../config/tema.js";

const OPTIONAL = [
  { key: "team", Component: Team, visible: hasTeam },
  { key: "reviews", Component: Reviews, visible: hasReviews },
  { key: "pricing", Component: Pricing, visible: hasPricing },
].filter((s) => s.visible);

const S = {
  needs: { key: "needs", Component: Needs },
  how: { key: "how", Component: HowItWorks },
  cartelle: { key: "cartelle", Component: CartelleBanner, dark: true },
  why: { key: "why", Component: WhyUs },
};

// Con la nuova palette la sezione cartelle è scura a tutta larghezza: prima
// di lei servono due sezioni chiare (Carta, Pietra). Le sezioni nascoste
// (dati mancanti) non rompono l'alternanza degli sfondi.
const ORDER = isNuovaPalette(TEMA_SITO)
  ? [S.needs, S.how, S.cartelle, S.why, ...OPTIONAL]
  : [S.needs, S.cartelle, S.how, S.why, ...OPTIONAL];

function withBackgrounds(sections) {
  let light = 0;
  return sections.map((s) => {
    if (s.dark) {
      // dopo la sezione scura si riparte da Carta; con la palette attuale il
      // banner sta su fondo bianco, quindi si riparte da Pietra
      light = isNuovaPalette(TEMA_SITO) ? 0 : 1;
      return { ...s, bg: "scuro" };
    }
    return { ...s, bg: RITMO_CHIARO[light++ % 2] };
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      {withBackgrounds(ORDER).map(({ key, Component, bg }) => (
        <Component key={key} bg={bg} />
      ))}
      <FinalCta />
    </>
  );
}
