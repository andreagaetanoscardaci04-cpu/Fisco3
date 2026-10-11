import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleCheck,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { SERVICES } from "../data/services.js";
import Hero from "../components/home/Hero.jsx";
import TrustStrip from "../components/home/TrustStrip.jsx";

const DEBT_TOPICS = [
  "Rottamazione 5",
  "Forfettari: risparmi",
  "Modelli 730: Rimborsi",
  "Resto al sud / Contributi",
];

const WHY_FISCO3 = [
  "Competenza Multidisciplinare: 3 professionisti al tuo servizio.",
  "Approccio Umano: Niente linguaggi tecnici incomprensibili.",
  "Trasparenza Totale: Costi chiari e risultati misurabili.",
  "Velocità Digitale: Risposte rapide via mail o WhatsApp.",
];

function DebtCard() {
  return (
    <div className="bg-carta border border-pietra p-8 md:p-14 rounded-md space-y-6 shadow-sm max-w-5xl mx-auto w-full">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-inchiostro">
          Hai ricevuto una cartella esattoriale?
        </h2>
        <p className="text-blu font-semibold text-xl flex items-center justify-center md:justify-start gap-3">
          <CircleCheck className="w-8 h-8" /> Analisi gratuita dei tuoi
          debiti
        </p>
      </div>
      <div className="space-y-6 mt-10">
        <p className="font-bold text-inchiostro uppercase tracking-[0.2em] text-sm text-center md:text-left">
          Quesiti su:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEBT_TOPICS.map((topic, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-basalto bg-bianco p-6 rounded-md shadow-sm border border-pietra transition-all hover:border-blu hover:shadow-lg"
            >
              <span className="bg-carta text-blu w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              <span className="font-semibold text-lg">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialProofCta() {
  return (
    <div className="bg-bianco p-10 md:p-16 rounded-md shadow-2xl border border-pietra space-y-10 max-w-5xl mx-auto w-full text-center">
      <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-inchiostro leading-tight">
          Pronto a recuperare la tua serenità finanziaria?
        </h3>
        <p className="text-xl text-basalto max-w-2xl mx-auto">
          Prenota oggi la tua analisi gratuita. Senza impegno, solo pura
          competenza fiscale per il tuo futuro.
        </p>
      </div>
      <div className="space-y-6">
        <Link
          to="/consulenze"
          className="inline-flex w-full md:w-auto bg-blu text-bianco px-16 py-6 rounded-md text-2xl font-bold transition-all hover:bg-carta hover:shadow-2xl hover:-translate-y-1 active:scale-95 items-center justify-center gap-4"
        >
          Inizia l'Analisi Gratuita <Smile className="w-8 h-8" />
        </Link>
        <p className="text-sm text-basalto-tenue font-medium italic">
          Risposta garantita entro 24 ore dai nostri esperti
        </p>
      </div>
      <div className="pt-10 border-t border-pietra flex flex-col items-center gap-6">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              className="w-14 h-14 rounded-full border-4 border-bianco shadow-md"
              src={`https://picsum.photos/seed/accountant${i}/150/150`}
              alt="Profilo Cliente"
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center text-inchiostro mb-2 gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-xl text-inchiostro font-bold">
            Oltre 100 clienti soddisfatti
          </p>
          <p className="text-sm text-basalto-tenue">
            Punteggio medio di 5/5 certificato su Google
          </p>
        </div>
      </div>
    </div>
  );
}

function OptimizationBanner() {
  return (
    <div className="bg-gradient-to-br from-inchiostro to-inchiostro p-10 md:p-16 rounded-md text-bianco shadow-2xl relative overflow-hidden group max-w-5xl mx-auto w-full">
      <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:rotate-12">
        <TrendingUp size={150} />
      </div>
      <div className="relative z-10 text-center md:text-left">
        <p className="text-pietra font-bold text-sm uppercase tracking-[0.3em] mb-4">
          La differenza Fisco3
        </p>
        <h4 className="text-3xl md:text-4xl font-bold mb-6">
          Ottimizzazione legale al 100%
        </h4>
        <p className="text-xl text-pietra leading-relaxed mb-10 max-w-2xl">
          Non ci limitiamo a inserire dati. Analizziamo ogni detrazione
          possibile per minimizzare il tuo carico fiscale legalmente e
          strategicamente.
        </p>
        <Link
          to="/consulenze"
          className="inline-flex items-center gap-3 text-bianco font-bold text-xl group-hover:gap-5 transition-all"
        >
          Scopri il nostro metodo{" "}
          <span className="text-pietra text-2xl">→</span>
        </Link>
      </div>
    </div>
  );
}

function LegacyBlocks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-16">
        <DebtCard />
        <SocialProofCta />
        <OptimizationBanner />
      </div>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="py-24 bg-carta">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-inchiostro mb-6">
            La nostra proposta di valore:{" "}
            <span className="text-blu">Libertà Fiscale</span>
          </h2>
          <p className="text-lg text-basalto leading-relaxed">
            Non siamo solo contabili. Siamo partner strategici che ti aiutano
            a fare chiarezza sul fisco, a toglierti ogni dubbio e a vivere la
            gestione burocratica con più serenità, prendendoci cura delle
            parti più complesse per te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-bianco p-8 rounded-md shadow-sm border border-pietra transition-all hover:shadow-xl hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold text-inchiostro mb-4">
                {service.label}
              </h3>
              <p className="text-basalto leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/team-office.png"
              alt="Team di esperti Fisco3"
              className="rounded-md shadow-2xl"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-inchiostro">
              Perché scegliere Fisco3?
            </h3>
            <ul className="space-y-4">
              {WHY_FISCO3.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-carta p-1 rounded-full">
                    <svg
                      className="w-4 h-4 text-blu"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-basalto font-medium">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24 bg-blu">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-bianco backdrop-blur-lg border border-bianco rounded-md p-8 md:p-16 text-center text-bianco relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Sparkles size={100} />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-20">
            <Sparkles size={80} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Pronto a dire addio allo stress fiscale?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unisciti a centinaia di professionisti e aziende che hanno già
            ottimizzato la loro posizione fiscale con il team di Fisco3.
          </p>
          <Link
            to="/consulenze"
            className="inline-flex items-center gap-3 bg-bianco text-blu px-12 py-5 rounded-md text-xl font-bold transition-all hover:bg-carta hover:scale-105 active:scale-95 shadow-2xl"
          >
            Richiedi la tua Analisi Gratuita <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <LegacyBlocks />
      <ValueProposition />
      <FinalCta />
    </div>
  );
}
