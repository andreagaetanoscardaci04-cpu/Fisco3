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
            <h1 className="text-balance text-4xl md:text-6xl">
              Contabilità per partite IVA e attività
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">
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
              className="aspect-[4/3] w-full rounded-2xl object-cover lg:col-span-6"
            />
          )}
        </div>
      </Section>

      <Section bg="bianco" aria-labelledby="servizi-contabilita">
        <h2 id="servizi-contabilita" className="text-3xl font-bold md:text-4xl">
          Cosa facciamo per te
        </h2>
        <ul className="mt-10 border-b border-slate-200">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="grid gap-2 border-t border-slate-200 py-6 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-xl font-semibold md:col-span-5">{f.title}</h3>
              <p className="max-w-2xl md:col-span-7">{f.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
