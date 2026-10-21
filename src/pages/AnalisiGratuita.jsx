import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Plus } from "lucide-react";
import SituationFlow from "../components/SituationFlow.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Reviews, { hasReviews } from "../components/home/Reviews.jsx";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import { studio, phoneHref } from "../config/studio";
import { FAQ_ITEMS } from "../data/faq.js";
import { useHydrated } from "../lib/useHydrated.js";

// Pagina per link in bio e annunci: si parte dal problema di chi arriva
// (SituationFlow), sotto le informazioni sullo studio. Nessun menu.

const NO_PARAMS = new URLSearchParams();
const FORM_ANCHOR = "modulo";

const FAQ_QUESTIONS = [
  "Cos'è Fisco3 e come funziona?",
  "Quanto costa il servizio?",
  "Quanto tempo ci vuole per ricevere una risposta?",
  "Cosa succede dopo la consulenza gratuita?",
];
const FAQ = FAQ_ITEMS.filter((f) => FAQ_QUESTIONS.includes(f.question));

function About() {
  const { teamOffice, teamOfficeSmall } = studio.images;
  return (
    <Section bg="pietra" aria-labelledby="chi-siamo-titolo">
      <div
        className={`grid items-center gap-10 lg:gap-16 ${
          teamOffice ? "lg:grid-cols-2" : ""
        }`}
      >
        {teamOffice && (
          <img
            src={teamOffice}
            srcSet={
              teamOfficeSmall
                ? `${teamOfficeSmall} 768w, ${teamOffice} 1536w`
                : undefined
            }
            sizes="(min-width: 1024px) 576px, 100vw"
            alt={`Il team di ${studio.brandName} in studio`}
            width="1536"
            height="1024"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-lg object-cover shadow-elevated"
          />
        )}
        <div>
          <h2 id="chi-siamo-titolo" className="section-title text-balance">
            Chi siamo
          </h2>
          <p className="section-lead">
            {studio.brandName} è uno studio associato di commercialisti a
            Catania, punto di riferimento in Sicilia, con clienti in tutta
            Italia. Ti spieghiamo cosa succede e perché, senza linguaggio
            tecnico incomprensibile.
          </p>
          <p className="mt-6 flex gap-3 text-[15px]">
            <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ocra" />
            {studio.address.full}
          </p>
        </div>
      </div>
    </Section>
  );
}

function Faq({ bg }) {
  return (
    <Section bg={bg} aria-labelledby="faq-titolo">
      <SectionHeader id="faq-titolo" title="Domande frequenti" />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQ.map((item) => (
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
            <p className="px-6 pb-6 leading-relaxed md:px-7">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section
      aria-labelledby="cta-titolo"
      className="on-dark bg-tonale-scuro py-16 md:py-24"
    >
      <Container className="text-center">
        <h2
          id="cta-titolo"
          className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
        >
          Partiamo dalla tua situazione
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-su-scuro">
          Ti richiama il professionista che segue la tua materia.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`#${FORM_ANCHOR}`} size="lg">
            Scegli la tua situazione
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

export default function AnalisiGratuita() {
  const [searchParams] = useSearchParams();
  const params = useHydrated() ? searchParams : NO_PARAMS;

  return (
    <>
      <section className="bg-tonale-chiaro pb-16 pt-10 md:pb-24 md:pt-16">
        <Container className="max-w-4xl">
          <div className="reveal text-center">
            <p className="text-sm font-semibold text-basalto">
              {studio.brandName} · Commercialisti in Sicilia, clienti in tutta Italia
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
              Di cosa hai bisogno?
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
              Scegli la tua situazione: ti facciamo le domande giuste e ti
              richiama il professionista che se ne occupa.
            </p>
          </div>
          <div id={FORM_ANCHOR} className="reveal reveal-delay mt-10 scroll-mt-6 md:mt-12">
            {/* la chiave riparte dal passo giusto se cambia ?tema= */}
            <SituationFlow key={params.get("tema") ?? ""} params={params} />
          </div>
        </Container>
      </section>

      <HowItWorks bg="carta" />
      <About />
      {hasReviews && <Reviews bg="carta" />}
      <Faq bg={hasReviews ? "pietra" : "carta"} />
      <FinalCta />
    </>
  );
}
