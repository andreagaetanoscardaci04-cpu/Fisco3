// Banner consenso cookie.
// Per passare a iubenda: rimuovere <CookieBanner /> da App.jsx, inserire lo
// script di iubenda in index.html e, nel callback onConsentGiven di iubenda,
// chiamare loadMetaPixel() se la finalità "marketing" (5) è accettata.
// Vedi anche src/lib/consent.js.
import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button.jsx";
import { getConsent, saveConsent } from "../lib/consent.js";
import {
  isPixelLoaded,
  loadMetaPixel,
  trackPageView,
} from "../lib/metaPixel.js";

export const OPEN_COOKIE_SETTINGS = "fisco3:apri-preferenze-cookie";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const { pathname } = useLocation();
  const marketingId = useId();

  // Lettura del consenso solo nel browser (compatibile con il prerendering)
  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setOpen(true);
    } else if (consent.marketing) {
      loadMetaPixel();
    }

    const reopen = () => {
      setMarketing(getConsent()?.marketing === true);
      setCustomizing(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  // PageView anche nei cambi di pagina interni (dopo il primo)
  const [firstPath] = useState(pathname);
  useEffect(() => {
    if (pathname !== firstPath) trackPageView();
  }, [pathname, firstPath]);

  const decide = (accepted) => {
    const wasLoaded = isPixelLoaded();
    saveConsent({ marketing: accepted });
    setOpen(false);
    setCustomizing(false);
    if (accepted) {
      loadMetaPixel();
    } else if (wasLoaded) {
      // il pixel non si può scaricare: ricarico la pagina senza
      window.location.reload();
    }
  };

  if (!open) return null;

  return (
    <section
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 rounded-t-lg bg-white shadow-elevated ring-1 ring-pietra-scura md:inset-x-auto md:bottom-6 md:right-6 md:max-w-md md:rounded-lg"
    >
      <div className="max-h-[85vh] overflow-y-auto p-6 md:p-7">
        <h2 className="text-lg font-bold">Rispettiamo la tua privacy</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Usiamo cookie tecnici, necessari al funzionamento del sito, e, solo
          con il tuo consenso, cookie di marketing di Meta per misurare le
          nostre campagne. Dettagli nella{" "}
          <Link to="/cookie-policy" className="link">
            cookie policy
          </Link>
          .
        </p>

        {customizing && (
          <fieldset className="mt-4 space-y-3 border-t border-pietra pt-4">
            <legend className="sr-only">Scegli quali cookie accettare</legend>
            <div className="flex gap-3">
              <input
                type="checkbox"
                checked
                disabled
                id={`${marketingId}-tecnici`}
                className="mt-1 h-5 w-5 shrink-0 accent-fisco"
              />
              <label htmlFor={`${marketingId}-tecnici`} className="text-sm">
                <span className="font-medium text-inchiostro">Tecnici</span>
                <br />
                Sempre attivi: servono al funzionamento del sito e a ricordare
                questa scelta.
              </label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id={marketingId}
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-fisco"
              />
              <label htmlFor={marketingId} className="cursor-pointer text-sm">
                <span className="font-medium text-inchiostro">Marketing</span>
                <br />
                Meta Pixel: misura le visite arrivate dalle nostre inserzioni
                su Facebook e Instagram.
              </label>
            </div>
          </fieldset>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2">
          {customizing ? (
            <Button className="col-span-2" onClick={() => decide(marketing)}>
              Salva le preferenze
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => decide(false)}>
                Rifiuta
              </Button>
              <Button onClick={() => decide(true)}>Accetta</Button>
              <Button
                variant="ghost"
                className="col-span-2"
                onClick={() => setCustomizing(true)}
              >
                Personalizza
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
