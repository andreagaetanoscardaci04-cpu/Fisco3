import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Consulenze", path: "/consulenze" },
  { name: "FAQ", path: "/faq" },
  { name: "Contabilità", path: "/contabilita" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-bianco backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight text-blu">
              Fisco<span className="text-inchiostro">3</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blu ${
                  isActive(link.path) ? "text-blu" : "text-basalto"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consulenze"
              className="bg-blu text-bianco px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-carta hover:shadow-lg hover:scale-105"
            >
              Richiedi Consulenza
            </Link>
          </nav>

          <button
            className="md:hidden text-inchiostro"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bianco border-t border-pietra py-4 px-4 space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium ${
                isActive(link.path) ? "text-blu" : "text-basalto"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consulenze"
            className="block bg-blu text-bianco text-center px-6 py-3 rounded-md font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Consulenza Gratuita
          </Link>
        </div>
      )}
    </header>
  );
}
