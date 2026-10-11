import Section from "./ui/Section.jsx";
import { studio, emailHref } from "../config/studio";

// Segnaposto: il testo legale ufficiale va fornito dallo studio (o da iubenda).
export default function LegalPage({ title, children }) {
  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        <p
          role="note"
          className="mt-8 rounded-2xl border-2 border-red-600 bg-white p-5 font-semibold text-red-700"
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
