import { Phone } from "lucide-react";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import Section from "../ui/Section.jsx";
import { studio, phoneHref } from "../../config/studio";

export default function FinalCta() {
  return (
    <Section bg="pietra" aria-labelledby="cta-titolo">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id="cta-titolo" className="section-title md:text-5xl">
          Parliamo della tua situazione
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty">
          La prima analisi è gratuita e non ti impegna a nulla: ti
          ricontattiamo entro {studio.responseTime}.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/consulenze" size="lg">
            Richiedi l'analisi gratuita
          </Button>
          <Button href={phoneHref} variant="secondary" size="lg">
            <Phone aria-hidden="true" className="h-4 w-4 text-fisco" />
            Chiama lo studio
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
