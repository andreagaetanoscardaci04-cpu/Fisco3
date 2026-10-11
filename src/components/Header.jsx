import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import Button from "./ui/Button.jsx";
import Container from "./ui/Container.jsx";
import Logo from "./Logo.jsx";
import { studio, phoneHref } from "../config/studio";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Consulenze", path: "/consulenze" },
  { name: "Contabilità", path: "/contabilita" },
  { name: "FAQ", path: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled || menuOpen
          ? "shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.15)]"
          : ""
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Link to="/" aria-label={`${studio.brandName}, home`}>
          <Logo />
        </Link>

        <nav aria-label="Principale" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-brand-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-brand-600"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-brand-600" />
            {studio.phone}
          </a>
          <Button to="/consulenze" className="!rounded-full !px-6">
            Richiedi consulenza
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-900 hover:bg-slate-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-elevated lg:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-xl px-4 text-lg font-medium ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-3 border-t border-slate-100 pt-5">
            <Button href={phoneHref} variant="secondary" className="w-full">
              <Phone aria-hidden="true" className="h-4 w-4" />
              Chiama {studio.phone}
            </Button>
            <Button to="/consulenze" className="w-full">
              Richiedi l'analisi gratuita
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
