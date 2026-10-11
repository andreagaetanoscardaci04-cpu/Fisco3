import { Link } from "react-router-dom";
import { Calculator, Clock, Lock } from "lucide-react";
import { studio } from "../config/studio";

const FEATURES = [
  {
    icon: <Calculator className="w-10 h-10 text-blu" />,
    title: "Fatturazione Elettronica",
    desc: "Invio e ricezione fatture direttamente tramite il nostro portale dedicato.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blu" />,
    title: "Scadenziario Fiscale",
    desc: "Mai più multe per dimenticanze. Ti avvisiamo noi in tempo per ogni pagamento F24.",
  },
  {
    icon: <Lock className="w-10 h-10 text-blu" />,
    title: "Archiviazione Sicura",
    desc: "Documenti salvati su server criptati e accessibili h24 da qualsiasi dispositivo.",
  },
];

export default function Contabilita() {
  return (
    <div className="min-h-screen bg-bianco">
      <section className="bg-carta pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-inchiostro">
                La tua Contabilità{" "}
                <span className="text-blu">Digitale</span>
              </h1>
              <p className="text-xl text-basalto leading-relaxed">
                Addio faldoni polverosi e scontrini persi. Con Fisco3 la tua
                contabilità è sempre a portata di click, sicura e aggiornata
                in tempo reale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/consulenze"
                  className="bg-blu text-bianco px-8 py-4 rounded-md font-bold text-lg hover:bg-carta transition-all"
                >
                  Inizia ora
                </Link>
                <a
                  href="#dettagli"
                  className="bg-bianco border border-pietra text-basalto px-8 py-4 rounded-md font-bold text-lg hover:bg-carta transition-all"
                >
                  Scopri i dettagli
                </a>
              </div>
            </div>
            {studio.images.office && (
              <img
                src={studio.images.office}
                alt="Lo studio Fisco3"
                className="rounded-md"
              />
            )}
          </div>
        </div>
      </section>

      <section id="dettagli" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-inchiostro">
              Un servizio completo a 360°
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-inchiostro">
                  {feature.title}
                </h3>
                <p className="text-basalto leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
