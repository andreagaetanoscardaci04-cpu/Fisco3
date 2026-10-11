import { CircleCheck } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import { TEMA_SITO, isNuovaPalette, hasOcra } from "../../config/tema.js";

const POINTS = [
  "Verifichiamo importi, interessi e sanzioni della cartella",
  "Valutiamo se puoi aderire alla rottamazione",
  "Ti spieghiamo quando conviene la rateizzazione",
];

const STYLES = {
  // palette attuale: riquadro blu notte su fondo bianco
  attuale: {
    section: "bg-white pb-20 md:pb-28",
    box: "on-dark rounded-lg bg-navy-900 px-6 py-12 md:px-14 md:py-16",
    tag: "text-brand-200",
    lead: "text-slate-300",
    point: "text-slate-200",
    icon: "text-brand-300",
    button: "inverse",
  },
  // nuova palette: sezione scura a tutta larghezza, gradiente tonale
  nuova: {
    section: "on-dark bg-tonale-scuro py-20 md:py-28",
    box: "",
    tag: "text-su-scuro",
    lead: "text-su-scuro",
    point: "text-white",
    icon: "text-su-scuro",
    button: "primary",
  },
};

// Sezione scura dedicata al servizio più richiesto
export default function CartelleBanner({
  tema = TEMA_SITO,
  idSuffix = "",
  titleAs: Title = "h2",
}) {
  const s = STYLES[isNuovaPalette(tema) ? "nuova" : "attuale"];
  const icon = hasOcra(tema) ? "text-ocra" : s.icon;
  const titleId = `cartelle-titolo${idSuffix}`;

  return (
    <section aria-labelledby={titleId} className={s.section}>
      <Container>
        <div className={s.box}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                className={`inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-sm font-semibold ${s.tag}`}
              >
                Analisi gratuita
              </p>
              <Title
                id={titleId}
                className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight md:text-[2.5rem]"
              >
                Hai ricevuto una cartella esattoriale?
              </Title>
              <p className={`mt-4 max-w-lg text-lg leading-relaxed ${s.lead}`}>
                Non ignorarla e non pagarla al buio. Mandaci la cartella: la
                leggiamo con te e ti diciamo quali strade hai.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {POINTS.map((p) => (
                  <li key={p} className={`flex gap-3 ${s.point}`}>
                    <CircleCheck
                      aria-hidden="true"
                      className={`mt-0.5 h-6 w-6 shrink-0 ${icon}`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                to="/consulenze?tema=cartelle"
                variant={s.button}
                tema={tema}
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
