import { CircleCheck } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";

const POINTS = [
  "Verifichiamo importi, interessi e sanzioni della cartella",
  "Valutiamo se puoi aderire alla rottamazione",
  "Ti spieghiamo quando conviene la rateizzazione",
];

// Sezione scura a tutta larghezza dedicata al servizio più richiesto
export default function CartelleBanner() {
  return (
    <section
      aria-labelledby="cartelle-titolo"
      className="on-dark bg-tonale-scuro py-16 text-su-scuro md:py-28"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-sm font-semibold">
              Analisi gratuita
            </p>
            <h2
              id="cartelle-titolo"
              className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]"
            >
              Hai ricevuto una cartella esattoriale?
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">
              Non ignorarla e non pagarla al buio. Mandaci la cartella: la
              leggiamo con te e ti diciamo quali strade hai.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-white">
                  <CircleCheck
                    aria-hidden="true"
                    className="mt-0.5 h-6 w-6 shrink-0 text-ocra"
                  />
                  {p}
                </li>
              ))}
            </ul>
            <Button
              to="/consulenze?tema=cartelle"
              size="lg"
              className="mt-8 w-full sm:w-auto"
            >
              Fai analizzare la tua cartella
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
