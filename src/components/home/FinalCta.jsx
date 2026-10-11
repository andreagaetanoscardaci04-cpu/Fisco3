import { Phone } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import { studio, phoneHref } from "../../config/studio";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-titolo"
      className="on-dark relative overflow-hidden bg-brand-600 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_70%)]"
      />
      <Container className="relative text-center">
        <h2
          id="cta-titolo"
          className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Parliamo della tua situazione
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
          La prima analisi è gratuita e non ti impegna a nulla. Ti
          ricontattiamo entro {studio.responseTime}.
          {studio.clientCount &&
            ` Oggi seguiamo ${studio.clientCount.toLocaleString("it-IT")} clienti.`}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/consulenze" variant="inverse" size="lg">
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
