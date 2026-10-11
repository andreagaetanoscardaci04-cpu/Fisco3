import { Link } from "react-router-dom";
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
          <h1 className="text-4xl md:text-6xl">Domande frequenti</h1>

          <div className="mt-10 border-b border-slate-200">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border-t border-slate-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium text-slate-900 hover:text-brand-600 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-slate-500 group-open:rotate-180"
                  />
                </summary>
                <div className="max-w-2xl pb-6">
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
        </div>
      </Section>

      <Section bg="bianco">
        <h2 className="text-3xl font-bold md:text-4xl">Non trovi la risposta?</h2>
        <p className="mt-4 max-w-2xl">
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
