import Button from "../components/ui/Button.jsx";
import Section from "../components/ui/Section.jsx";
import FinalCta from "../components/home/FinalCta.jsx";
import { studio } from "../config/studio";

const FEATURES = [
  {
    title: "Fatturazione elettronica",
    desc: studio.features.clientPortal
      ? "Invio e ricezione fatture direttamente tramite il nostro portale dedicato."
      : "Ti assistiamo nell'emissione e nella ricezione delle fatture elettroniche.",
  },
  {
    title: "Scadenze e versamenti",
    desc: "Ti avvisiamo per tempo di ogni scadenza e prepariamo gli F24 da pagare.",
  },
  {
    title: "Registrazioni e dichiarazioni",
    desc: "Teniamo la contabilità durante l'anno e prepariamo le dichiarazioni fiscali.",
  },
  studio.features.encryptedArchive && {
    title: "Archiviazione sicura",
    desc: "Documenti salvati su server criptati e accessibili h24 da qualsiasi dispositivo.",
  },
].filter(Boolean);

export default function Contabilita() {
  return (
    <>
      <Section bg="carta" className="!pt-10 md:!pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={studio.images.office ? "lg:col-span-6" : "lg:col-span-8"}>
            <h1 className="text-balance text-display md:text-display-lg">
              Contabilità per partite IVA e attività
            </h1>
            <p className="mt-5 max-w-prose text-lead md:text-lead-lg">
              Teniamo la tua contabilità durante tutto l'anno, con un
              professionista di riferimento che conosce la tua situazione.
            </p>
            <Button to="/consulenze" className="mt-8">
              Richiedi l'analisi gratuita
            </Button>
          </div>
          {studio.images.office && (
            <img
              src={studio.images.office}
              alt="Lo studio Fisco3"
              className="aspect-[4/3] w-full rounded-md object-cover lg:col-span-6"
            />
          )}
        </div>
      </Section>

      <Section bg="bianco" aria-labelledby="servizi-contabilita">
        <h2 id="servizi-contabilita" className="text-h2 md:text-h2-lg">
          Cosa facciamo per te
        </h2>
        <ul className="mt-10 border-b border-pietra">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="grid gap-2 border-t border-pietra py-6 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-h3 md:col-span-5">{f.title}</h3>
              <p className="max-w-prose md:col-span-7">{f.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
