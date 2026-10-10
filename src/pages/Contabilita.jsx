import { Link } from "react-router-dom";
import { Calculator, Clock, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: <Calculator className="w-10 h-10 text-[#1657e8]" />,
    title: "Fatturazione Elettronica",
    desc: "Invio e ricezione fatture direttamente tramite il nostro portale dedicato.",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#1657e8]" />,
    title: "Scadenziario Fiscale",
    desc: "Mai più multe per dimenticanze. Ti avvisiamo noi in tempo per ogni pagamento F24.",
  },
  {
    icon: <Lock className="w-10 h-10 text-[#1657e8]" />,
    title: "Archiviazione Sicura",
    desc: "Documenti salvati su server criptati e accessibili h24 da qualsiasi dispositivo.",
  },
];

export default function Contabilita() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                La tua Contabilità{" "}
                <span className="text-[#1657e8]">Digitale</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Addio faldoni polverosi e scontrini persi. Con Fisco3 la tua
                contabilità è sempre a portata di click, sicura e aggiornata
                in tempo reale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/consulenze"
                  className="bg-[#1657e8] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all"
                >
                  Inizia ora
                </Link>
                <a
                  href="#dettagli"
                  className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all"
                >
                  Scopri i dettagli
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                alt="Gestione contabile"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dettagli" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Un servizio completo a 360°
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl md:text-4xl font-light italic text-gray-300 leading-relaxed">
              "Fisco3 non è solo uno studio, è il respiro di sollievo che ogni
              imprenditore merita di avere."
            </p>
            <cite className="block text-[#1657e8] text-xl font-bold not-italic">
              — Il team di Fisco3
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
