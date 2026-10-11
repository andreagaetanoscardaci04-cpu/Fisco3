import {
  Calculator,
  CalendarClock,
  CircleCheck,
  FileText,
  Lock,
} from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import FinalCta from "../components/home/FinalCta.jsx";
import { studio } from "../config/studio";

const FEATURES = [
  {
    Icon: Calculator,
    title: "Fatturazione elettronica",
    desc: studio.features.clientPortal
      ? "Invio e ricezione fatture direttamente tramite il nostro portale dedicato."
      : "Ti assistiamo nell'emissione e nella ricezione delle fatture elettroniche, senza errori.",
  },
  {
    Icon: CalendarClock,
    title: "Scadenze e F24",
    desc: "Ti avvisiamo per tempo di ogni scadenza e prepariamo gli F24 da pagare. Niente più multe per dimenticanza.",
  },
  {
    Icon: FileText,
    title: "Registrazioni e dichiarazioni",
    desc: "Teniamo la contabilità durante l'anno e prepariamo le dichiarazioni fiscali.",
  },
  studio.features.encryptedArchive && {
    Icon: Lock,
    title: "Archiviazione sicura",
    desc: "Documenti salvati su server criptati e accessibili h24 da qualsiasi dispositivo.",
  },
].filter(Boolean);

const INCLUDED = [
  "Un professionista di riferimento",
  "Scadenzario fiscale sempre aggiornato",
  "Preventivo chiaro prima di iniziare",
  `Risposte entro ${studio.responseTime}`,
];

export default function Contabilita() {
  return (
    <>
      <section className="bg-tonale-chiaro pb-16 pt-14 md:pb-24 md:pt-20">
        <Container className="reveal grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              <Calculator aria-hidden="true" className="h-4 w-4" />
              Contabilità
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tightest text-inchiostro md:text-6xl">
              La tua contabilità, seguita da vicino.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-basalto md:text-xl">
              Partite IVA, ditte individuali e piccole attività: teniamo la tua
              contabilità tutto l'anno, con un professionista che conosce la tua
              situazione.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/consulenze" size="lg">
                Richiedi l'analisi gratuita
              </Button>
              <Button href="#servizi-contabilita" variant="secondary" size="lg">
                Scopri cosa facciamo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            {studio.images.office ? (
              <img
                src={studio.images.office}
                alt={`Lo studio ${studio.brandName}`}
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-elevated"
              />
            ) : (
              <div className="on-dark rounded-lg bg-tonale-scuro p-8 shadow-elevated md:p-10">
                <h2 className="text-xl font-bold">Cosa è incluso</h2>
                <ul className="mt-6 space-y-4">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 text-white">
                      <CircleCheck
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-su-scuro"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      <Section bg="carta" id="servizi-contabilita" aria-labelledby="servizi-contabilita-titolo">
        <SectionHeader
          id="servizi-contabilita-titolo"
          title="Un servizio completo"
          lead="Ci occupiamo noi degli adempimenti, tu pensi al tuo lavoro."
        />
        <ul
          className={`mt-14 grid gap-6 md:grid-cols-2 ${
            FEATURES.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {FEATURES.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="rounded-lg bg-white p-7 shadow-card ring-1 ring-pietra md:p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-fisco-tenue text-inchiostro">
                <Icon aria-hidden="true" className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
