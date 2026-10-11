import { ChevronDown } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Section from "../components/ui/Section.jsx";
import { FAQ_ITEMS } from "../data/faq.js";
import { studio, phoneHref } from "../config/studio";

export default function Faq() {
  return (
    <>
      <Section bg="carta" className="!pt-10 md:!pt-16">
        <div className="max-w-3xl">
          <h1 className="text-display md:text-display-lg">Domande frequenti</h1>
          <p className="mt-5 text-lead md:text-lead-lg">
            Come lavoriamo, quanto costa e cosa succede dopo la prima analisi.
          </p>

          <div className="mt-10 border-b border-pietra">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border-t border-pietra"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium text-inchiostro hover:text-blu [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-basalto-tenue group-open:rotate-180"
                  />
                </summary>
                <div className="max-w-prose pb-6">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="bianco">
        <h2 className="text-h2 md:text-h2-lg">Non trovi la risposta?</h2>
        <p className="mt-4 max-w-prose">
          Scrivici dal modulo o chiama lo studio: rispondiamo entro{" "}
          {studio.responseTime}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/consulenze">Richiedi l'analisi gratuita</Button>
          <Button href={phoneHref} variant="secondary">
            Chiama lo studio
          </Button>
        </div>
      </Section>
    </>
  );
}
