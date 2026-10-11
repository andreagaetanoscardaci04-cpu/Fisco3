import { Check, MessageSquareText, Receipt, Timer, Users } from "lucide-react";
import Button from "../ui/Button.jsx";
import Section from "../ui/Section.jsx";
import { studio } from "../../config/studio";

const REASONS = [
  {
    Icon: Users,
    title: "Tre specialisti, un solo studio",
    text: "Cartelle, partite IVA e 730: ogni pratica la segue chi se ne occupa ogni giorno.",
  },
  {
    Icon: MessageSquareText,
    title: "Parliamo chiaro",
    text: "Niente linguaggio tecnico incomprensibile: ti spieghiamo cosa succede e perché.",
  },
  {
    Icon: Receipt,
    title: "Prezzo chiaro prima di iniziare",
    text: "Dopo l'analisi sai cosa c'è da fare e quanto costa. Nessuna sorpresa.",
  },
  {
    Icon: Timer,
    title: "Risposte in tempi certi",
    text: `Ti rispondiamo entro ${studio.responseTime}.`,
  },
];

const ANALYSIS = [
  "Un quadro chiaro della tua situazione fiscale",
  "Le opzioni possibili, spiegate in modo semplice",
  "Un preventivo preciso, se decidi di procedere",
];

export default function WhyUs({ bg }) {
  return (
    <Section bg={bg} aria-labelledby="perche-titolo">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="perche-titolo" className="section-title text-balance">
            Perché scegliere {studio.brandName}
          </h2>
          <p className="section-lead max-w-xl">
            Uno studio di Catania dove sai sempre con chi stai parlando.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {REASONS.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="on-dark rounded-lg bg-brand-600 p-8 text-brand-50 shadow-elevated md:p-10">
            <h3 className="text-2xl font-bold tracking-tight">
              Cosa ottieni dalla prima analisi
            </h3>
            <p className="mt-2 text-brand-100">Gratuita e senza impegno.</p>
            <ul className="mt-7 space-y-4">
              {ANALYSIS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/15">
                    <Check aria-hidden="true" className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              to="/consulenze"
              variant="inverse"
              size="lg"
              className="mt-9 w-full"
            >
              Richiedi l'analisi gratuita
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
