import Section from "../ui/Section.jsx";
import { studio } from "../../config/studio";

const STEPS = [
  {
    title: "Richiedi l'analisi",
    text: "Compili il modulo o chiami lo studio e ci racconti in poche righe la tua situazione.",
  },
  {
    title: "Parli con il professionista che hai scelto",
    text: `Ti ricontattiamo entro ${studio.responseTime} per fissare il colloquio.`,
  },
  {
    title: "Ricevi una proposta chiara con il prezzo",
    text: "Ti diciamo cosa c'è da fare e quanto costa prima di iniziare. Decidi tu se procedere.",
  },
  {
    title: "Ti seguiamo durante l'anno",
    text: "Ti avvisiamo per tempo di scadenze e versamenti e hai sempre lo stesso professionista come riferimento.",
  },
];

export default function HowItWorks({ bg }) {
  return (
    <Section bg={bg} aria-labelledby="come-funziona-titolo">
      <h2 id="come-funziona-titolo" className="text-h2 md:text-h2-lg">
        Come funziona
      </h2>
      <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="border-t-2 border-inchiostro pt-5">
            <span
              aria-hidden="true"
              className="font-serif text-h3 font-semibold text-inchiostro"
            >
              {i + 1}
            </span>
            <h3 className="mt-2 text-h3">{step.title}</h3>
            <p className="mt-2">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
