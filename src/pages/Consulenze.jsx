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

      <section className="bg-white pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              {/* la chiave rimonta il modulo se cambiano ?prof= o ?tema= */}
              <ConsulenzaForm key={params.toString()} params={params} />
            </div>

            <aside className="lg:col-span-4" aria-labelledby="dopo-titolo">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="on-dark rounded-3xl bg-brand-600 p-7 text-brand-50 shadow-elevated md:p-8">
                  <h2 id="dopo-titolo" className="text-xl font-bold">
                    Cosa succede dopo l'invio
                  </h2>
                  <ol className="mt-6 space-y-5">
                    {NEXT_STEPS.map((text, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-700"
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

                <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-900/5">
                  <p className="font-semibold text-slate-900">
                    Preferisci parlarne a voce?
                  </p>
                  <a
                    href={phoneHref}
                    className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <Phone aria-hidden="true" className="h-5 w-5" />
                    {studio.phone}
                  </a>
                  <p className="mt-5 flex gap-2 border-t border-slate-200 pt-5 text-sm text-slate-500">
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
