import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Section, { SectionHeader } from "../ui/Section.jsx";
import { SERVICES } from "../../data/services.js";

const ICONS = {
  cartelle: ShieldCheck,
  forfettario: Briefcase,
  730: FileText,
  "resto-al-sud": TrendingUp,
};

export default function Needs({ bg }) {
  return (
    <Section bg={bg} id="servizi" aria-labelledby="servizi-titolo">
      <SectionHeader
        id="servizi-titolo"
        title="Di cosa hai bisogno?"
        lead="Parti dalla tua situazione: ti risponde il professionista che se ne occupa ogni giorno."
      />
      {/* Su mobile un elenco a righe, da md in su una griglia di schede */}
      <ul className="mt-10 grid border-b border-pietra-scura md:mt-14 md:grid-cols-2 md:gap-6 md:border-0">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug];
          return (
            <li key={s.slug} className="border-t border-pietra-scura md:border-0">
              <Link
                to={`/consulenze?tema=${s.slug}`}
                className="group flex h-full gap-5 py-7 transition-colors duration-200 md:rounded-lg md:bg-white md:p-8 md:shadow-card md:ring-1 md:ring-pietra md:hover:ring-fisco"
              >
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-fisco-tenue text-inchiostro transition-colors group-hover:bg-inchiostro group-hover:text-white md:flex">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <span className="flex flex-1 flex-col">
                  <h3 className="flex items-start gap-3 text-xl font-semibold leading-snug md:block">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-ocra md:hidden"
                    />
                    {s.situation}
                  </h3>
                  <span className="mt-2 block flex-1 leading-relaxed text-basalto">
                    {s.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-fisco group-hover:underline md:group-hover:no-underline">
                    {s.ctaLabel}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
