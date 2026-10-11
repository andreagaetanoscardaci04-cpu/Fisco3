import { TriangleAlert } from "lucide-react";
import Container from "./ui/Container.jsx";
import PageHero from "./ui/PageHero.jsx";
import { studio, emailHref } from "../config/studio";

// Segnaposto: il testo legale ufficiale va fornito dallo studio (o da iubenda).
export default function LegalPage({ title, children }) {
  return (
    <>
      <PageHero title={title} />
      <section className="bg-white pb-20 md:pb-28">
        <Container className="max-w-3xl">
          <p
            role="note"
            className="flex gap-3 rounded-2xl bg-red-50 p-5 font-semibold text-red-800 ring-1 ring-red-200"
          >
            <TriangleAlert aria-hidden="true" className="h-6 w-6 shrink-0" />
            TESTO DA SOSTITUIRE CON INFORMATIVA UFFICIALE
          </p>
          <p className="mt-8 text-lg">
            Per qualsiasi domanda sul trattamento dei tuoi dati puoi scrivere a{" "}
            <a href={emailHref} className="link">
              {studio.email}
            </a>
            .
          </p>
          {children}
        </Container>
      </section>
    </>
  );
}
