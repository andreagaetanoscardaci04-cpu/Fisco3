import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import MobileActionBar from "./components/MobileActionBar.jsx";
import Home from "./pages/Home.jsx";
import Consulenze from "./pages/Consulenze.jsx";
import AnalisiGratuita, { FORM_ANCHOR } from "./pages/AnalisiGratuita.jsx";
import { LandingFooter, LandingHeader } from "./components/LandingChrome.jsx";
import Faq from "./pages/Faq.jsx";
import Contabilita from "./pages/Contabilita.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import NotFound from "./pages/NotFound.jsx";
import { trackPath } from "./lib/navigation.js";
import { useSeo } from "./seo/useSeo.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    trackPath(pathname);
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Il router (BrowserRouter o StaticRouter) è fornito da main.jsx o
// entry-server.jsx, così la stessa app viene prerenderizzata e idratata.
// Pagine per link in bio e annunci: intestazione e footer senza menu
const LANDING_PATHS = ["/analisi-gratuita"];

export default function App() {
  useSeo();
  const isLanding = LANDING_PATHS.includes(useLocation().pathname);
  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        {isLanding ? <LandingHeader /> : <Header />}
        <main id="contenuto" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulenze" element={<Consulenze />} />
            <Route path="/analisi-gratuita" element={<AnalisiGratuita />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contabilita" element={<Contabilita />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {isLanding ? <LandingFooter /> : <Footer />}
        <MobileActionBar formHref={isLanding ? `#${FORM_ANCHOR}` : undefined} />
        <CookieBanner />
      </div>
    </>
  );
}
