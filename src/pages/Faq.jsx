import { Link } from "react-router-dom";
import { CircleHelp, Phone, Plus } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { FAQ_ITEMS } from "../data/faq.js";
import { studio, phoneHref } from "../config/studio";

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Centro assistenza"
        icon={CircleHelp}
        title="Domande"
        highlight="frequenti"
        lead="Come lavoriamo, quanto costa e cosa succede dopo la prima analisi."
      />

      <section className="bg-carta pb-20 md:pb-28">
        <Container className="max-w-3xl">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg bg-white ring-1 ring-pietra transition-colors open:ring-pietra-scura"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg px-6 py-5 text-left text-[17px] font-semibold text-inchiostro hover:text-fisco-hover md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-fisco-tenue text-inchiostro transition group-open:rotate-45 group-open:bg-inchiostro group-open:text-white">
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-6 pb-6 leading-relaxed md:px-7">
                  <p>{item.answer}</p>
                  {item.link && (
                    <Link to={item.link.to} className="link mt-3 inline-block">
                      {item.link.label}
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-pietra p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Hai altre domande?</h2>
            <p className="mx-auto mt-3 max-w-md">
              Scrivici dal modulo o chiama lo studio: rispondiamo entro{" "}
              {studio.responseTime}.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/consulenze">Richiedi l'analisi gratuita</Button>
              <Button href={phoneHref} variant="secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-fisco" />
                Chiama lo studio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
