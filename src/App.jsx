import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import MobileActionBar from "./components/MobileActionBar.jsx";
import Home from "./pages/Home.jsx";
import Consulenze from "./pages/Consulenze.jsx";
import Faq from "./pages/Faq.jsx";
import Contabilita from "./pages/Contabilita.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import { trackPath } from "./lib/navigation.js";

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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="contenuto" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulenze" element={<Consulenze />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contabilita" element={<Contabilita />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
