import { Check } from "lucide-react";
import Section, { SectionHeader } from "../ui/Section.jsx";
import Button from "../ui/Button.jsx";
import { studio } from "../../config/studio";

export const hasPricing = studio.pricing.length > 0;

// "€1.200": formato richiesto, con separatore delle migliaia anche a 4 cifre
const formatEuro = (n) =>
  `€${new Intl.NumberFormat("it-IT", { useGrouping: "always" }).format(n)}`;

export default function Pricing({ bg }) {
  if (!hasPricing) return null;
  return (
    <Section bg={bg} id="pacchetti" aria-labelledby="pacchetti-titolo">
      <SectionHeader
        id="pacchetti-titolo"
        title="Pacchetti"
        lead="Il prezzo definitivo te lo diciamo dopo l'analisi gratuita, prima di iniziare."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studio.pricing.map((pkg) => (
          <li
            key={pkg.name}
            className="flex flex-col rounded-lg bg-white p-7 shadow-card ring-1 ring-pietra md:p-8"
          >
            <h3 className="text-xl">{pkg.name}</h3>
            <p className="mt-1 text-sm text-basalto">{pkg.target}</p>
            <p className="mt-6 text-basalto">
              a partire da
              <span className="mt-1 block font-serif text-4xl font-semibold text-inchiostro">
                {formatEuro(pkg.priceFrom)}
                <span className="text-base font-medium text-basalto">/anno</span>
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-pietra pt-6">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-inchiostro"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/consulenze" variant="secondary" className="mt-8 w-full">
              Chiedi un preventivo
            </Button>
          </li>
        ))}
      </ul>
      {studio.pricingNote && (
        <p className="mt-8 text-center text-sm text-basalto">
          {studio.pricingNote}
        </p>
      )}
    </Section>
  );
}
