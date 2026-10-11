import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "./ui/Container.jsx";
import Logo from "./Logo.jsx";
import { OPEN_COOKIE_SETTINGS } from "./CookieBanner.jsx";
import { MOBILE_BAR_SPACE } from "./MobileActionBar.jsx";
import { studio, phoneHref, emailHref } from "../config/studio";
import { TEMA_SITO, isNuovaPalette } from "../config/tema.js";

// Con la nuova palette CTA finale e footer sono entrambi scuri: il bordo
// inchiostro-bordo (#1E2D4F) li separa.
const FOOTER_BG = isNuovaPalette(TEMA_SITO)
  ? "bg-tonale-scuro text-su-scuro border-t border-inchiostro-bordo"
  : "bg-navy-950 text-slate-400";

const SOCIALS = [
  { href: studio.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: studio.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: studio.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
].filter((s) => s.href);

const PAGES = [
  { name: "Home", path: "/" },
  { name: "Consulenze", path: "/consulenze" },
  { name: "Contabilità", path: "/contabilita" },
  { name: "FAQ", path: "/faq" },
];

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  studio.address.full,
)}`;

const LINK = "transition-colors hover:text-white";

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
        className="aspect-[4/3] w-full rounded-lg border-0"
      />
    );
  }

  return (
    <div className="rounded-lg bg-white/5 p-5 ring-1 ring-inset ring-white/10">
      <MapPin aria-hidden="true" className="h-6 w-6 text-brand-300" />
      <p className="mt-3 text-sm text-slate-400">
        La mappa è fornita da Google, che riceverà alcuni dati della tua
        navigazione.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShow(true)}
          className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          Mostra la mappa
        </button>
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
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
      className={`on-dark pt-20 ${FOOTER_BG} ${MOBILE_BAR_SPACE}`}
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={`${studio.brandName}, home`}>
              <Logo dark />
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed">
              {studio.legalName ?? "Studio associato di commercialisti"} a
              Catania. Tre professionisti, tre specialità: il team lo scegli
              tu.
            </p>
            {studio.piva && (
              <p className="mt-3 text-sm">P.IVA {studio.piva}</p>
            )}
            {SOCIALS.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-brand-600"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Pagine del sito" className="lg:col-span-2">
            <h2 className="text-base font-semibold text-white">
              Pagine
            </h2>
            <ul className="mt-5 space-y-3">
              {PAGES.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className={LINK}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-base font-semibold text-white">
              Contatti
            </h2>
            <address className="mt-5 space-y-4 not-italic">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-brand-300"
                />
                {studio.address.full}
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-brand-300"
                />
                <a href={phoneHref} className={LINK}>
                  {studio.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-brand-300"
                />
                <a href={emailHref} className={`${LINK} break-all`}>
                  {studio.email}
                </a>
              </p>
            </address>
            {studio.openingHours && (
              <dl className="mt-6 space-y-1 text-sm">
                {studio.openingHours.map((h) => (
                  <div key={h.label} className="flex flex-wrap gap-x-2">
                    <dt className="text-white">{h.label}</dt>
                    <dd>{h.hours}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-base font-semibold text-white">
              Dove siamo
            </h2>
            <div className="mt-5">
              <MapEmbed />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {studio.legalName ??
              `${studio.brandName}, Studio associato di commercialisti`}
            {studio.piva && `, P.IVA ${studio.piva}`}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
        </div>
      </Container>
    </footer>
  );
}
