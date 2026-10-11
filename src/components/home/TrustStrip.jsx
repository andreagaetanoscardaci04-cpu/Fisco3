import { Star } from "lucide-react";
import Container from "../ui/Container.jsx";
import { studio, hasAlbo, yearsActive } from "../../config/studio";

// Solo dati veri: ogni voce compare se il dato esiste in studio.ts
export default function TrustStrip() {
  const { rating, reviewCount, profileUrl } = studio.google;

  const items = [
    rating &&
      reviewCount &&
      profileUrl && {
        value: (
          <span className="inline-flex items-center gap-2">
            {rating.toLocaleString("it-IT")}
            <Star aria-hidden="true" className="h-6 w-6 fill-amber-400 text-amber-400" />
          </span>
        ),
        label: `su Google, ${reviewCount} recensioni`,
        href: profileUrl,
      },
    { value: "3", label: "professionisti, ognuno con la sua specialità" },
    { value: "Gratis", label: "la prima analisi della tua situazione" },
    { value: "48/72 h", label: "per ricevere risposta (giorni lavorativi)" },
    yearsActive && {
      value: `${yearsActive} anni`,
      label: `di attività, dal ${studio.foundedYear}`,
    },
    hasAlbo && {
      value: "Albo",
      label: "iscritti all'Albo dei Dottori Commercialisti",
    },
  ]
    .filter(Boolean)
    .slice(0, 4);

  return (
    <section aria-label="Lo studio in breve" className="bg-white pb-6">
      <Container>
        <ul
          className={`grid gap-y-8 rounded-3xl bg-slate-50 px-6 py-8 ring-1 ring-slate-900/5 md:divide-x md:divide-slate-200 md:px-0 ${
            items.length === 4
              ? "grid-cols-2 md:grid-cols-4"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {items.map((item, i) => {
            const content = (
              <>
                <span className="block text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {item.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-slate-600">
                  {item.label}
                </span>
              </>
            );
            return (
              <li key={i} className="px-2 text-center md:px-6">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
