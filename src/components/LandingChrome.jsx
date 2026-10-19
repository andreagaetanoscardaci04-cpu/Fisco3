import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Container from "./ui/Container.jsx";
import Logo from "./Logo.jsx";
import { OPEN_COOKIE_SETTINGS } from "./CookieBanner.jsx";
import { MOBILE_BAR_SPACE } from "./MobileActionBar.jsx";
import { studio, phoneHref, emailHref } from "../config/studio";

// Intestazione e piè di pagina ridotti per le pagine degli annunci:
// niente menu, così l'attenzione resta sul modulo.

export function LandingHeader() {
  return (
    <header className="bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Logo />
        {/* Su mobile il telefono è nella barra in basso */}
        <a
          href={phoneHref}
          className="hidden items-center gap-2 text-[15px] font-medium text-basalto transition-colors hover:text-fisco lg:inline-flex"
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-fisco" />
          {studio.phone}
        </a>
      </Container>
    </header>
  );
}

const LINK = "transition-colors hover:text-white";

export function LandingFooter() {
  return (
    <footer
      className={`on-dark border-t border-inchiostro-bordo bg-tonale-scuro pt-10 text-sm text-su-scuro ${MOBILE_BAR_SPACE}`}
    >
      <Container className="flex flex-col gap-6 pb-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-white">
            {studio.legalName ??
              `${studio.brandName}, Studio associato di commercialisti`}
          </p>
          <p>{studio.address.full}</p>
          <p>
            <a href={phoneHref} className={LINK}>
              {studio.phone}
            </a>
            {" · "}
            <a href={emailHref} className={`${LINK} break-all`}>
              {studio.email}
            </a>
          </p>
          {studio.piva && <p>P.IVA {studio.piva}</p>}
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link to="/" className={`${LINK} font-semibold text-white`}>
              Visita il sito
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className={LINK}>
              Privacy policy
            </Link>
          </li>
          <li>
            <Link to="/cookie-policy" className={LINK}>
              Cookie policy
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))
              }
              className={LINK}
            >
              Preferenze cookie
            </button>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
