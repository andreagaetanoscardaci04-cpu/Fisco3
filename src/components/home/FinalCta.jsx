import { Phone } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import { studio, phoneHref } from "../../config/studio";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-titolo"
      className="on-dark bg-tonale-scuro py-20 md:py-28"
    >
      <Container className="text-center">
        <h2
          id="cta-titolo"
          className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl"
        >
          Parliamo della tua situazione
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-su-scuro">
          La prima analisi è gratuita e non ti impegna a nulla. Ti
          ricontattiamo entro {studio.responseTime}.
          {studio.clientCount &&
            ` Oggi seguiamo ${studio.clientCount.toLocaleString("it-IT")} clienti.`}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/consulenze" size="lg">
            Richiedi l'analisi gratuita
          </Button>
          <Button href={phoneHref} variant="outline-light" size="lg">
            <Phone aria-hidden="true" className="h-4 w-4" />
            Chiama lo studio
          </Button>
        </div>
      </Container>
    </section>
  );
}
