import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Container from "./ui/Container.jsx";
import { OPEN_COOKIE_SETTINGS } from "./CookieBanner.jsx";
import { MOBILE_BAR_SPACE } from "./MobileActionBar.jsx";
import { studio, phoneHref, emailHref } from "../config/studio";

const SOCIALS = [
  { href: studio.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: studio.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: studio.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
].filter((s) => s.href);

const PAGES = [
  { name: "Home", path: "/" },
  { name: "Richiedi l'analisi gratuita", path: "/consulenze" },
  { name: "Contabilità", path: "/contabilita" },
  { name: "Domande frequenti", path: "/faq" },
];

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  studio.address.full,
)}`;

const FOOTER_LINK = "underline-offset-4 hover:text-bianco hover:underline";

// La mappa di Google si carica solo su richiesta (invia dati a Google)
function MapEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={studio.mapsEmbedUrl}
        title={`Mappa: ${studio.address.full}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="aspect-[4/3] w-full rounded-md border-0"
      />
    );
  }

  return (
    <div className="rounded-md border border-basalto-tenue p-5">
      <p className="text-small">
        La mappa è fornita da Google, che riceverà alcuni dati della tua
        navigazione.
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        <button type="button" onClick={() => setShow(true)} className="link">
          Mostra la mappa
        </button>
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Apri in Google Maps
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className={`on-dark border-t border-basalto-tenue bg-inchiostro pt-16 text-pietra md:pt-20 ${MOBILE_BAR_SPACE}`}
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="font-serif text-h3-lg font-semibold text-bianco">
              {studio.brandName}
            </p>
            <p className="mt-2">
              {studio.legalName ?? "Studio associato di commercialisti"}
            </p>
            {studio.piva && <p className="mt-1">P.IVA {studio.piva}</p>}
            {SOCIALS.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-sm border border-basalto-tenue hover:border-bianco hover:text-bianco"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-body font-semibold">Contatti</h2>
            <address className="mt-4 space-y-2 not-italic">
              <p>{studio.address.full}</p>
              <p>
                <a href={phoneHref} className={FOOTER_LINK}>
                  {studio.phone}
                </a>
              </p>
              <p>
                <a href={emailHref} className={FOOTER_LINK}>
                  {studio.email}
                </a>
              </p>
            </address>
            {studio.openingHours && (
              <>
                <h2 className="mt-8 font-sans text-body font-semibold">
                  Orari
                </h2>
                <dl className="mt-4 space-y-1">
                  {studio.openingHours.map((h) => (
                    <div key={h.label} className="flex flex-wrap gap-x-2">
                      <dt>{h.label}:</dt>
                      <dd>{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>

          <nav aria-label="Pagine del sito" className="lg:col-span-3">
            <h2 className="font-sans text-body font-semibold">Pagine</h2>
            <ul className="mt-4 space-y-2">
              {PAGES.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className={FOOTER_LINK}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-body font-semibold">Dove siamo</h2>
            <div className="mt-4">
              <MapEmbed />
            </div>
          </div>
        </div>

        <div className="mb-10 mt-12 flex flex-col gap-4 border-t border-basalto-tenue pt-6 text-small md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {studio.legalName ?? studio.brandName}
            {studio.piva && ` · P.IVA ${studio.piva}`}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy-policy" className={FOOTER_LINK}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className={FOOTER_LINK}>
                Cookie policy
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))
                }
                className={FOOTER_LINK}
              >
                Preferenze cookie
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
