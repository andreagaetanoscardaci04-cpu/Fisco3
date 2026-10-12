import { useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import Section from "../ui/Section.jsx";
import { SERVICES } from "../../data/services.js";

// Contenuto della situazione selezionata: cosa facciamo, cosa portare, CTA
function Detail({ service, heading: H = "h3" }) {
  return (
    <>
      <H className="text-xl">Cosa facciamo noi</H>
      <ul className="mt-3 space-y-2">
        {service.weDo.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <H className="mt-8 text-xl">Cosa ti serve portare</H>
      <ul className="mt-3 space-y-2">
        {service.bring.map((doc) => (
          <li key={doc} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-sm bg-ocra"
            />
            {doc}
          </li>
        ))}
      </ul>
      <Button to={`/consulenze?tema=${service.slug}`} className="mt-9">
        Richiedi l'analisi
      </Button>
    </>
  );
}

// Desktop: elenco di situazioni a sinistra (tab verticali), pannello a destra
function Tabs({ selected, onSelect, baseId }) {
  const tabRefs = useRef([]);

  const onKeyDown = (e, i) => {
    const last = SERVICES.length - 1;
    const next = {
      ArrowDown: i === last ? 0 : i + 1,
      ArrowRight: i === last ? 0 : i + 1,
      ArrowUp: i === 0 ? last : i - 1,
      ArrowLeft: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    onSelect(next);
    tabRefs.current[next]?.focus();
  };

  const service = SERVICES[selected];

  return (
    <div className="mt-14 hidden grid-cols-12 gap-12 lg:grid">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="La tua situazione"
        className="col-span-6 flex flex-col"
      >
        {SERVICES.map((s, i) => {
          const active = i === selected;
          return (
            <button
              key={s.slug}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`${baseId}-tab-${s.slug}`}
              aria-selected={active}
              aria-controls={`${baseId}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative border-l-4 py-4 pl-6 pr-2 text-left font-serif text-[1.75rem] font-medium leading-[1.2] transition-colors duration-200 ${
                active
                  ? "border-ocra text-inchiostro"
                  : "border-transparent text-basalto/70 hover:text-inchiostro"
              }`}
            >
              {s.situation}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${service.slug}`}
        tabIndex={0}
        className="col-span-6 self-start rounded-lg bg-white p-8 shadow-card ring-1 ring-pietra xl:p-10"
      >
        <div key={service.slug} className="fade-in">
          <Detail service={service} />
        </div>
      </div>
    </div>
  );
}

// Mobile: accordion, una situazione aperta alla volta
function Accordion({ selected, onSelect, baseId }) {
  return (
    <ul className="mt-10 border-t border-pietra-scura lg:hidden">
      {SERVICES.map((s, i) => {
        const open = i === selected;
        const panelId = `${baseId}-acc-${s.slug}`;
        return (
          <li key={s.slug} className="border-b border-pietra-scura">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => onSelect(open ? -1 : i)}
                className={`flex w-full items-start justify-between gap-4 border-l-4 py-5 pl-4 text-left font-serif text-[1.375rem] font-medium leading-[1.25] ${
                  open ? "border-ocra text-inchiostro" : "border-transparent text-inchiostro"
                }`}
              >
                {s.situation}
                <ChevronDown
                  aria-hidden="true"
                  className={`mt-1 h-5 w-5 shrink-0 text-basalto transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div id={panelId} hidden={!open} className="fade-in pb-8 pl-5">
              <Detail service={s} heading="h4" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Needs({ bg }) {
  const baseId = useId();
  const [tab, setTab] = useState(0);
  const [accordion, setAccordion] = useState(0);

  return (
    <Section bg={bg} id="servizi" aria-labelledby="servizi-titolo">
      <Reveal className="max-w-2xl">
        <h2 id="servizi-titolo" className="section-title">
          Di cosa hai bisogno?
        </h2>
        <p className="section-lead text-pretty">
          Scegli la tua situazione: ti diciamo cosa facciamo e cosa ti serve
          portare alla prima analisi.
        </p>
      </Reveal>
      <Tabs selected={tab} onSelect={setTab} baseId={baseId} />
      <Accordion selected={accordion} onSelect={setAccordion} baseId={baseId} />
    </Section>
  );
}
