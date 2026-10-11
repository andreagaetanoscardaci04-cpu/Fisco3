import { useSearchParams } from "react-router-dom";
import ConsulenzaForm from "../components/ConsulenzaForm.jsx";
import Section from "../components/ui/Section.jsx";
import { studio, phoneHref } from "../config/studio";

const NEXT_STEPS = [
  `Ti ricontattiamo entro ${studio.responseTime}.`,
  "Parli della tua situazione con il professionista che se ne occupa.",
  "Ti diciamo cosa c'è da fare e quanto costa. Decidi tu se procedere: l'analisi non ti impegna a nulla.",
];

export default function Consulenze() {
  const [searchParams] = useSearchParams();

  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-prose">
        <h1 className="text-display md:text-display-lg">
          Richiedi l'analisi gratuita
        </h1>
        <p className="mt-5 text-lead md:text-lead-lg">
          Raccontaci in poche righe di cosa hai bisogno. La prima analisi è
          gratuita.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          {/* la chiave rimonta il modulo se cambiano ?prof= o ?tema= */}
          <ConsulenzaForm key={searchParams.toString()} />
        </div>

        <aside className="lg:col-span-4" aria-labelledby="dopo-titolo">
          <div className="rounded-md border border-pietra bg-bianco p-6 lg:sticky lg:top-28">
            <h2 id="dopo-titolo" className="text-h3">
              Cosa succede dopo l'invio
            </h2>
            <ol className="mt-4 space-y-4">
              {NEXT_STEPS.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="font-serif font-semibold text-inchiostro"
                  >
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-pietra pt-5">
              Preferisci parlarne a voce?{" "}
              <a href={phoneHref} className="link">
                Chiama lo studio
              </a>
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
