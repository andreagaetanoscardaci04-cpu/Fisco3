import { ClipboardList, MessageSquareText, Users } from "lucide-react";
import Button from "../ui/Button.jsx";
import Section from "../ui/Section.jsx";
import { studio } from "../../config/studio";

// Cosa distingue lo studio e cosa ottieni dalla prima analisi.
// Il percorso (contatto, proposta, preventivo) è già in "Come funziona".
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
    Icon: ClipboardList,
    title: "Una prima analisi che ti serve",
    text: "Esci con un quadro chiaro della tua situazione fiscale e le opzioni possibili, spiegate in modo semplice. Gratis e senza impegno.",
  },
];

export default function WhyUs({ bg }) {
  return (
    <Section bg={bg} aria-labelledby="perche-titolo">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="perche-titolo" className="section-title text-balance">
            Perché scegliere {studio.brandName}
          </h2>
          <p className="section-lead">
            Uno studio di Catania dove sai sempre con chi stai parlando.
          </p>
          <Button to="/consulenze" className="mt-8">
            Richiedi l'analisi gratuita
          </Button>
        </div>
        <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
          {REASONS.map(({ Icon, title, text }) => (
            <li key={title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-fisco-tenue text-inchiostro">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
