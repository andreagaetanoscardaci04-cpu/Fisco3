import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Section from "../ui/Section.jsx";
import { studio } from "../../config/studio";

export const hasPricing = studio.pricing.length > 0;

// "€1.200": formato richiesto, con separatore delle migliaia anche a 4 cifre
const formatEuro = (n) =>
  `€${new Intl.NumberFormat("it-IT", { useGrouping: "always" }).format(n)}`;

export default function Pricing({ bg }) {
  if (!hasPricing) return null;
  return (
    <Section bg={bg} id="pacchetti" aria-labelledby="pacchetti-titolo">
      <h2 id="pacchetti-titolo" className="text-h2 md:text-h2-lg">
        Pacchetti
      </h2>
      <p className="mt-4 max-w-prose">
        Il prezzo definitivo te lo diciamo dopo l'analisi gratuita, prima di
        iniziare.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studio.pricing.map((pkg) => (
          <li
            key={pkg.name}
            className="flex flex-col rounded-md border border-pietra bg-bianco p-6"
          >
            <h3 className="text-h3">{pkg.name}</h3>
            <p className="mt-1 text-small text-basalto-tenue">{pkg.target}</p>
            <p className="mt-5 text-inchiostro">
              a partire da{" "}
              <span className="font-serif text-h2 font-semibold">
                {formatEuro(pkg.priceFrom)}
              </span>
              /anno
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-inchiostro"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/consulenze" className="link mt-6">
              Chiedi un preventivo per {pkg.name}
            </Link>
          </li>
        ))}
      </ul>
      {studio.pricingNote && (
        <p className="mt-6 text-small text-basalto-tenue">
          {studio.pricingNote}
        </p>
      )}
    </Section>
  );
}
