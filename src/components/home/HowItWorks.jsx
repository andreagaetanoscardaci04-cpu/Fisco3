import Section, { SectionHeader } from "../ui/Section.jsx";

const STEPS = [
  {
    title: "Richiedi l'analisi",
    text: "Compili il modulo o chiami lo studio e ci racconti in poche righe la tua situazione.",
  },
  {
    title: "Parli con lo specialista",
    text: "Ti ricontattiamo e parli con il professionista che segue il tuo caso.",
  },
  {
    title: "Ricevi una proposta chiara",
    text: "Ti diciamo cosa c'è da fare e quanto costa, prima di iniziare. Decidi tu se procedere.",
  },
  {
    title: "Ti seguiamo tutto l'anno",
    text: "Ti avvisiamo per tempo di scadenze e versamenti, con lo stesso professionista come riferimento.",
  },
];

export default function HowItWorks({ bg }) {
  return (
    <Section bg={bg} aria-labelledby="come-funziona-titolo">
      <SectionHeader
        id="come-funziona-titolo"
        title="Come funziona"
        lead="Dal primo contatto alla gestione di tutto l'anno, in quattro passaggi."
      />
      <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[3.25rem] hidden h-px bg-pietra-scura lg:block"
        />
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-lg bg-white p-6 text-center shadow-card ring-1 ring-pietra md:p-7"
          >
            <span
              aria-hidden="true"
              className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-md border-2 border-ocra bg-white text-lg font-bold text-inchiostro"
            >
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
