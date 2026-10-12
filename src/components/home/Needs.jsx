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
      <ul className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug];
          return (
            <li key={s.slug}>
              <Link
                to={`/consulenze?tema=${s.slug}`}
                className="group flex h-full gap-5 rounded-lg bg-white p-6 shadow-card ring-1 ring-pietra transition-colors duration-200 hover:ring-fisco md:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-fisco-tenue text-inchiostro transition-colors group-hover:bg-inchiostro group-hover:text-white">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <span className="flex flex-1 flex-col">
                  <h3 className="text-xl leading-snug">
                    {s.situation}
                  </h3>
                  <span className="mt-2 block flex-1 leading-relaxed text-basalto">
                    {s.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-fisco">
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
