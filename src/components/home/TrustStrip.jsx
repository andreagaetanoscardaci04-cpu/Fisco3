import { BadgeCheck, CalendarDays, MapPin, Star } from "lucide-react";
import Container from "../ui/Container.jsx";
import { studio, hasAlbo, yearsActive } from "../../config/studio";

const { rating, reviewCount, profileUrl } = studio.google;

// Solo dati veri da studio.ts. L'indirizzo da solo non basta a mostrare la
// striscia: compare quando c'è almeno uno degli altri dati.
const PROOF = [
  rating &&
    reviewCount &&
    profileUrl && {
      Icon: Star,
      iconClass: "fill-ocra text-ocra",
      text: `${rating.toLocaleString("it-IT")} su Google, ${reviewCount} recensioni`,
      href: profileUrl,
    },
  hasAlbo && {
    Icon: BadgeCheck,
    iconClass: "text-ocra",
    text: "Iscritti all'Albo dei Dottori Commercialisti",
  },
  yearsActive && {
    Icon: CalendarDays,
    text: `${yearsActive} anni di attività, dal ${studio.foundedYear}`,
  },
].filter(Boolean);

export const hasTrustStrip = PROOF.length > 0;

const ITEMS = [
  ...PROOF,
  { Icon: MapPin, text: studio.address.short },
];

export default function TrustStrip({ className = "" }) {
  if (!hasTrustStrip) return null;

  return (
    <section
      aria-label="Lo studio in breve"
      className={`border-b border-pietra bg-white py-5 ${className}`}
    >
      <Container>
        <ul className="flex flex-col gap-3 text-[15px] font-medium text-basalto md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-8">
          {ITEMS.map(({ Icon, iconClass, text, href }) => {
            const content = (
              <>
                <Icon
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 ${iconClass ?? "text-inchiostro"}`}
                />
                {text}
              </>
            );
            return (
              <li key={text}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-fisco-hover"
                  >
                    {content}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    {content}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
