import Button from "../ui/Button.jsx";
import Section from "../ui/Section.jsx";
import { studio } from "../../config/studio";

export default function FinalCta() {
  return (
    <Section bg="inchiostro" aria-labelledby="cta-titolo">
      <div className="max-w-prose">
        <h2 id="cta-titolo" className="text-h2 md:text-h2-lg">
          Raccontaci la tua situazione
        </h2>
        <p className="mt-4">
          La prima analisi è gratuita e non ti impegna a nulla. Ti
          ricontattiamo entro {studio.responseTime}.
        </p>
        <Button to="/consulenze" variant="inverse" className="mt-8">
          Richiedi l'analisi gratuita
        </Button>
      </div>
    </Section>
  );
}
