import { CircleCheck } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";

const POINTS = [
  "Verifichiamo importi, interessi e sanzioni della cartella",
  "Valutiamo se puoi aderire alla rottamazione",
  "Ti spieghiamo quando conviene la rateizzazione",
];

// Banner scuro dedicato al servizio più richiesto
export default function CartelleBanner() {
  return (
    <section aria-labelledby="cartelle-titolo" className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="on-dark relative overflow-hidden rounded-4xl bg-navy-900 px-6 py-12 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[48px] border-white/[0.04]"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-200">
                Analisi gratuita
              </p>
              <h2
                id="cartelle-titolo"
                className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight md:text-[2.5rem]"
              >
                Hai ricevuto una cartella esattoriale?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
                Non ignorarla e non pagarla al buio. Mandaci la cartella: la
                leggiamo con te e ti diciamo quali strade hai.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-slate-200">
                    <CircleCheck
                      aria-hidden="true"
                      className="mt-0.5 h-6 w-6 shrink-0 text-brand-300"
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                to="/consulenze?tema=cartelle"
                variant="inverse"
                size="lg"
                className="mt-8 w-full sm:w-auto"
              >
                Fai analizzare la tua cartella
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
