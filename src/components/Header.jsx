import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button.jsx";
import Container from "./ui/Container.jsx";
import { studio, phoneHref } from "../config/studio";

const NAV_LINKS = [
  { name: "Contabilità", path: "/contabilita" },
  { name: "Domande frequenti", path: "/faq" },
];

const navLinkClass = ({ isActive }) =>
  `underline-offset-8 hover:text-blu ${
    isActive
      ? "font-medium text-inchiostro underline decoration-2"
      : "text-basalto"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // chiude il menu al cambio pagina e con Esc
  useEffect(() => setMenuOpen(false), [location.pathname, location.search]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-pietra bg-bianco">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-h3-lg font-semibold text-inchiostro">
            {studio.brandName}
          </span>
          <span className="hidden text-small text-basalto-tenue lg:inline">
            Studio associato di commercialisti
          </span>
        </Link>

        <nav aria-label="Principale" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}
          <a href={phoneHref} className="text-basalto hover:text-blu">
            {studio.phone}
          </a>
          <Button to="/consulenze">Richiedi l'analisi gratuita</Button>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex min-h-12 items-center gap-2 rounded-sm px-2 font-medium text-inchiostro md:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Chiudi" : "Menu"}
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
          className="absolute inset-x-0 top-full border-b border-pietra bg-bianco shadow-float md:hidden"
        >
          <ul className="divide-y divide-pietra border-b border-pietra">
            {[{ name: "Home", path: "/" }, ...NAV_LINKS].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `flex min-h-14 items-center px-5 text-body-lg ${
                      isActive
                        ? "font-medium text-inchiostro"
                        : "text-basalto"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-4 px-5 py-5">
            <p>
              Telefono{" "}
              <a href={phoneHref} className="link">
                {studio.phone}
              </a>
            </p>
            <Button to="/consulenze" className="w-full">
              Richiedi l'analisi gratuita
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
