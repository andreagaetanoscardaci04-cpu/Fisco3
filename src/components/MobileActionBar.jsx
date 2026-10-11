import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "../config/studio";

// Spazio riservato in fondo al footer su mobile, per non coprire contenuti
export const MOBILE_BAR_SPACE =
  "pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0";

const ITEM =
  "flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md px-2 text-sm font-semibold transition-colors";

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Contatti rapidi"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-pietra bg-white px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-elevated lg:hidden"
    >
      <div className="flex gap-2">
        <a
          href={phoneHref}
          className={`${ITEM} bg-carta text-inchiostro ring-1 ring-inset ring-pietra-scura hover:bg-pietra`}
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Chiama
        </a>
        {whatsappHref && (
          <a
            href={whatsappHref}
            className={`${ITEM} bg-carta text-inchiostro ring-1 ring-inset ring-pietra-scura hover:bg-pietra`}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
        )}
        <Link
          to="/consulenze"
          className={`${ITEM} flex-[1.5] bg-fisco text-white hover:bg-fisco-hover`}
        >
          Analisi gratuita
        </Link>
      </div>
    </nav>
  );
}
