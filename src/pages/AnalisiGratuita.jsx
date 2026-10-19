import { useSearchParams } from "react-router-dom";
import {
  BadgeCheck,
  Briefcase,
  CircleCheck,
  FileText,
  Gift,
  MapPin,
  Phone,
  Plus,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import ConsulenzaForm from "../components/ConsulenzaForm.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Reviews, { hasReviews } from "../components/home/Reviews.jsx";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import { studio, phoneHref } from "../config/studio";
import { SERVICES } from "../data/services.js";
import { FAQ_ITEMS } from "../data/faq.js";
import { useHydrated } from "../lib/useHydrated.js";

// Pagina per link in bio e annunci: il modulo in apertura, sotto le
// informazioni che servono a fidarsi. Nessun menu: l'unica azione è
// richiedere l'analisi (o chiamare).

const NO_PARAMS = new URLSearchParams();
export const FORM_ANCHOR = "modulo";

const PROMISES = [
  "Gratuita e senza impegno",
  "Ti risponde il professionista che segue la tua materia",
  "In studio a Catania o a distanza, in tutta Italia",
];

const SERVICE_ICONS = {
  cartelle: ShieldCheck,
  forfettario: Briefcase,
  730: FileText,
  "resto-al-sud": Rocket,
};

const FAQ_QUESTIONS = [
  "Posso fare una consulenza gratuita senza impegno?",
  "Quanto costa il servizio?",
  "Quanto tempo ci vuole per ricevere una risposta?",
  "Cosa succede dopo la consulenza gratuita?",
];
const FAQ = FAQ_ITEMS.filter((f) => FAQ_QUESTIONS.includes(f.question));

function Services() {
  return (
    <Section bg="carta" aria-labelledby="servizi-titolo">
      <SectionHeader
        id="servizi-titolo"
        title="Di cosa ci occupiamo"
        lead="Tre specialisti, un solo studio: ogni pratica la segue chi se ne occupa ogni giorno."
      />
      <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.slug] ?? BadgeCheck;
          return (
            <li
              key={s.slug}
              className="flex gap-4 rounded-lg bg-white p-6 shadow-card ring-1 ring-pietra md:p-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-fisco-tenue text-inchiostro">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{s.label}</h3>
                <p className="mt-1 text-[15px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function About() {
  const { teamOffice, teamOfficeSmall } = studio.images;
  return (
    <Section bg="carta" aria-labelledby="chi-siamo-titolo">
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
          className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Parliamo della tua situazione
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-su-scuro">
          La prima analisi è gratuita e non ti impegna a nulla.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`#${FORM_ANCHOR}`} size="lg">
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

export default function AnalisiGratuita() {
  const [searchParams] = useSearchParams();
  const params = useHydrated() ? searchParams : NO_PARAMS;

  return (
    <>
      <section className="bg-tonale-chiaro pb-16 pt-10 md:pb-24 md:pt-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="reveal lg:col-span-5 lg:pt-6">
              <p className="eyebrow">
                <Gift aria-hidden="true" className="h-4 w-4" />
                Prima analisi gratuita
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tightest md:text-5xl">
                Parla con un commercialista, senza impegno
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed">
                Cartelle esattoriali, partita IVA e forfettario, 730: lasciaci
                i tuoi dati e ti ricontattiamo per capire insieme la tua
                situazione.
              </p>
              <ul className="mt-7 hidden space-y-3 lg:block">
                {PROMISES.map((p) => (
                  <li key={p} className="flex gap-3">
                    <CircleCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ocra" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id={FORM_ANCHOR}
              className="reveal reveal-delay scroll-mt-6 lg:col-span-7"
            >
              <ConsulenzaForm key={params.toString()} params={params} />
            </div>

            <ul className="space-y-3 lg:hidden">
              {PROMISES.map((p) => (
                <li key={p} className="flex gap-3">
                  <CircleCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ocra" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Services />
      <HowItWorks bg="pietra" />
      <About />
      {hasReviews && <Reviews bg="pietra" />}
      <Faq bg={hasReviews ? "carta" : "pietra"} />
      <FinalCta />
    </>
  );
}
