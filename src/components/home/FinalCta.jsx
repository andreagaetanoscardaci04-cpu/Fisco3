import { Phone } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import { studio, phoneHref } from "../../config/studio";
import { TEMA_SITO, isNuovaPalette } from "../../config/tema.js";

export default function FinalCta({ tema = TEMA_SITO }) {
  const nuova = isNuovaPalette(tema);
  return (
    <section
      aria-labelledby="cta-titolo"
      className={`on-dark py-20 md:py-28 ${
        nuova ? "bg-tonale-scuro" : "bg-brand-600"
      }`}
    >
      <Container className="text-center">
        <h2
          id="cta-titolo"
          className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Parliamo della tua situazione
        </h2>
        <p className={`mx-auto mt-5 max-w-xl text-lg leading-relaxed ${
            nuova ? "text-su-scuro" : "text-brand-100"
          }`}>
          La prima analisi è gratuita e non ti impegna a nulla. Ti
          ricontattiamo entro {studio.responseTime}.
          {studio.clientCount &&
            ` Oggi seguiamo ${studio.clientCount.toLocaleString("it-IT")} clienti.`}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            to="/consulenze"
            variant={nuova ? "primary" : "inverse"}
            size="lg"
            tema={tema}
          >
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
