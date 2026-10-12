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
  const { teamOffice, teamOfficeSmall } = studio.images;

  return (
    <Section bg={bg} aria-labelledby="perche-titolo">
      <div
        className={`grid items-center gap-10 lg:gap-16 ${
          teamOffice ? "lg:grid-cols-2" : ""
        }`}
      >
        {teamOffice && (
          <img
            src={teamOffice}
            srcSet={
              teamOfficeSmall
                ? `${teamOfficeSmall} 768w, ${teamOffice} 1536w`
                : undefined
            }
            sizes="(min-width: 1024px) 576px, 100vw"
            alt={`Il team di ${studio.brandName} in studio`}
            width="1536"
            height="1024"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-lg object-cover shadow-card md:order-2 md:shadow-elevated lg:order-1"
          />
        )}
        <div className="md:order-1 lg:order-2">
          <h2 id="perche-titolo" className="section-title text-balance">
            Perché scegliere {studio.brandName}
          </h2>
          <p className="section-lead">
            Un punto di riferimento in Sicilia, con clienti in tutta Italia: sai sempre con chi stai parlando.
          </p>
          {/* Su mobile righe separate da filetti, da md in su icone su riquadro */}
          <ul className="mt-8 border-b border-pietra-scura md:space-y-6 md:border-0">
            {REASONS.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-3 border-t border-pietra-scura py-5 md:gap-4 md:border-0 md:py-0"
              >
                <span className="flex shrink-0 justify-center pt-0.5 text-ocra md:h-11 md:w-11 md:items-center md:rounded-md md:bg-fisco-tenue md:pt-0 md:text-inchiostro">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button to="/consulenze" className="mt-8 w-full sm:w-auto">
            Richiedi l'analisi gratuita
          </Button>
        </div>
      </div>
    </Section>
  );
}
