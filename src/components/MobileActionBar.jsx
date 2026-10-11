import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "../config/studio";

// Altezza riservata in fondo alla pagina su mobile (vedi App.jsx)
export const MOBILE_BAR_SPACE = "pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0";

const ITEM =
  "flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm px-2 text-small font-medium";

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Contatti rapidi"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-pietra bg-bianco px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-float md:hidden"
    >
      <div className="flex gap-2">
        <a
          href={phoneHref}
          className={`${ITEM} border border-pietra-scura text-inchiostro hover:bg-carta`}
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Chiama
        </a>
        {whatsappHref && (
          <a
            href={whatsappHref}
            className={`${ITEM} border border-pietra-scura text-inchiostro hover:bg-carta`}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
        )}
        <Link
          to="/consulenze"
          className={`${ITEM} flex-[1.4] bg-blu text-bianco hover:bg-blu-scuro`}
        >
          Analisi gratuita
        </Link>
      </div>
    </nav>
  );
}
