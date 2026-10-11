import Section from "./ui/Section.jsx";
import { studio, emailHref } from "../config/studio";

// Segnaposto: il testo legale ufficiale va fornito dallo studio (o da iubenda).
export default function LegalPage({ title, children }) {
  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-prose">
        <h1 className="text-display md:text-display-lg">{title}</h1>
        <p
          role="note"
          className="mt-8 rounded-md border-2 border-errore bg-bianco p-5 font-semibold text-errore"
        >
          TESTO DA SOSTITUIRE CON INFORMATIVA UFFICIALE
        </p>
        <p className="mt-6">
          Per qualsiasi domanda sul trattamento dei tuoi dati puoi scrivere a{" "}
          <a href={emailHref} className="link">
            {studio.email}
          </a>
          .
        </p>
        {children}
      </div>
    </Section>
  );
}
