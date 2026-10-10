import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Consulenze from "./pages/Consulenze.jsx";
import Faq from "./pages/Faq.jsx";
import Contabilita from "./pages/Contabilita.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulenze" element={<Consulenze />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contabilita" element={<Contabilita />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
