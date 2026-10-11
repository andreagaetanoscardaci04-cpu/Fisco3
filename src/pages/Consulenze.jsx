import { useSearchParams } from "react-router-dom";
import { Gift, Lock, Phone } from "lucide-react";
import ConsulenzaForm from "../components/ConsulenzaForm.jsx";
import Container from "../components/ui/Container.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { studio, phoneHref } from "../config/studio";
import { useHydrated } from "../lib/useHydrated.js";

const NO_PARAMS = new URLSearchParams();

const NEXT_STEPS = [
  `Ti ricontattiamo entro ${studio.responseTime}.`,
  "Parli della tua situazione con il professionista che se ne occupa.",
  "Ti diciamo cosa c'è da fare e quanto costa. Decidi tu se procedere.",
];

export default function Consulenze() {
  const [searchParams] = useSearchParams();
  const params = useHydrated() ? searchParams : NO_PARAMS;

  return (
    <>
      <PageHero
        eyebrow="Prima analisi gratuita"
        icon={Gift}
        title="Richiedi la tua"
        highlight="analisi gratuita"
        lead="Raccontaci in poche righe di cosa hai bisogno: ti risponde il professionista che segue la tua materia."
      />

      <section className="bg-carta pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              {/* la chiave rimonta il modulo se cambiano ?prof= o ?tema= */}
              <ConsulenzaForm key={params.toString()} params={params} />
            </div>

            <aside className="lg:col-span-4" aria-labelledby="dopo-titolo">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="on-dark rounded-lg bg-tonale-scuro p-7 text-su-scuro shadow-elevated md:p-8">
                  <h2 id="dopo-titolo" className="text-xl font-bold">
                    Cosa succede dopo l'invio
                  </h2>
                  <ol className="mt-6 space-y-5">
                    {NEXT_STEPS.map((text, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-sm font-bold text-inchiostro"
                        >
                          {i + 1}
                        </span>
                        <span className="pt-1 leading-relaxed text-white">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-lg bg-white p-7 ring-1 ring-pietra">
                  <p className="font-semibold text-inchiostro">
                    Preferisci parlarne a voce?
                  </p>
                  <a
                    href={phoneHref}
                    className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-fisco hover:text-fisco-hover"
                  >
                    <Phone aria-hidden="true" className="h-5 w-5" />
                    {studio.phone}
                  </a>
                  <p className="mt-5 flex gap-2 border-t border-pietra pt-5 text-sm text-basalto">
                    <Lock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                    Usiamo i tuoi dati solo per risponderti.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
