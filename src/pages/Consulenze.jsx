import { useSearchParams } from "react-router-dom";
import ConsulenzaForm from "../components/ConsulenzaForm.jsx";
import Section from "../components/ui/Section.jsx";
import { studio, phoneHref } from "../config/studio";
import { useHydrated } from "../lib/useHydrated.js";

const NO_PARAMS = new URLSearchParams();

const NEXT_STEPS = [
  `Ti ricontattiamo entro ${studio.responseTime}.`,
  "Parli della tua situazione con il professionista che se ne occupa.",
  "Ti diciamo cosa c'è da fare e quanto costa. Decidi tu se procedere: l'analisi non ti impegna a nulla.",
];

export default function Consulenze() {
  const [searchParams] = useSearchParams();
  const params = useHydrated() ? searchParams : NO_PARAMS;

  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl">
          Richiedi l'analisi gratuita
        </h1>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          {/* la chiave rimonta il modulo se cambiano ?prof= o ?tema= */}
          <ConsulenzaForm key={params.toString()} params={params} />
        </div>

        <aside className="lg:col-span-4" aria-labelledby="dopo-titolo">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-28">
            <h2 id="dopo-titolo" className="text-xl font-semibold">
              Cosa succede dopo l'invio
            </h2>
            <ol className="mt-4 space-y-4">
              {NEXT_STEPS.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className=" font-semibold text-slate-900"
                  >
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-slate-200 pt-5">
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
