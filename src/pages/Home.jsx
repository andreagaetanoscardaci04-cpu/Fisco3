import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleCheck,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { SERVICES } from "../data/services.jsx";

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

function HeroImage({ scrollY }) {
  return (
    <div className="relative group max-w-5xl mx-auto w-full">
      <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-200/50 bg-gray-100">
        <img
          src="/team-hero.png"
          alt="Il Team di Fisco3"
          className="w-full h-[25rem] md:h-[35rem] object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div
        className="absolute -bottom-6 right-10 bg-white p-5 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border border-gray-50"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      >
        <div className="bg-green-100 p-3 rounded-xl">
          <ShieldCheck className="text-green-600 w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Pace della Mente</p>
          <p className="text-xs text-gray-500">Tasse sotto controllo</p>
        </div>
      </div>
    </div>
  );
}

function DebtCard() {
  return (
    <div className="bg-blue-50/50 border border-blue-100 p-8 md:p-14 rounded-[3rem] space-y-6 shadow-sm max-w-5xl mx-auto w-full">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Hai ricevuto una cartella esattoriale?
        </h2>
        <p className="text-[#1657e8] font-semibold text-xl flex items-center justify-center md:justify-start gap-3">
          <CircleCheck className="w-8 h-8" /> Analisi gratuita dei tuoi
          debiti
        </p>
      </div>
      <div className="space-y-6 mt-10">
        <p className="font-bold text-gray-800 uppercase tracking-[0.2em] text-sm text-center md:text-left">
          Quesiti su:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEBT_TOPICS.map((topic, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-gray-700 bg-white p-6 rounded-3xl shadow-sm border border-gray-50 transition-all hover:border-[#1657e8] hover:shadow-lg"
            >
              <span className="bg-blue-100 text-[#1657e8] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
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
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50 space-y-10 max-w-5xl mx-auto w-full text-center">
      <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Pronto a recuperare la tua serenità finanziaria?
        </h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Prenota oggi la tua analisi gratuita. Senza impegno, solo pura
          competenza fiscale per il tuo futuro.
        </p>
      </div>
      <div className="space-y-6">
        <Link
          to="/consulenze"
          className="inline-flex w-full md:w-auto bg-[#1657e8] text-white px-16 py-6 rounded-3xl text-2xl font-bold transition-all hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 active:scale-95 items-center justify-center gap-4"
        >
          Inizia l'Analisi Gratuita <Smile className="w-8 h-8" />
        </Link>
        <p className="text-sm text-gray-400 font-medium italic">
          Risposta garantita entro 24 ore dai nostri esperti
        </p>
      </div>
      <div className="pt-10 border-t border-gray-100 flex flex-col items-center gap-6">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
              src={`https://picsum.photos/seed/accountant${i}/150/150`}
              alt="Profilo Cliente"
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center text-yellow-400 mb-2 gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-xl text-gray-900 font-bold">
            Oltre 100 clienti soddisfatti
          </p>
          <p className="text-sm text-gray-400">
            Punteggio medio di 5/5 certificato su Google
          </p>
        </div>
      </div>
    </div>
  );
}

function OptimizationBanner() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-10 md:p-16 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group max-w-5xl mx-auto w-full">
      <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:rotate-12">
        <TrendingUp size={150} />
      </div>
      <div className="relative z-10 text-center md:text-left">
        <p className="text-blue-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">
          La differenza Fisco3
        </p>
        <h4 className="text-3xl md:text-4xl font-bold mb-6">
          Ottimizzazione legale al 100%
        </h4>
        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
          Non ci limitiamo a inserire dati. Analizziamo ogni detrazione
          possibile per minimizzare il tuo carico fiscale legalmente e
          strategicamente.
        </p>
        <Link
          to="/consulenze"
          className="inline-flex items-center gap-3 text-white font-bold text-xl group-hover:gap-5 transition-all"
        >
          Scopri il nostro metodo{" "}
          <span className="text-blue-400 text-2xl">→</span>
        </Link>
      </div>
    </div>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-40">
      <div
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-16 md:space-y-24">
          <div className="text-center space-y-4 order-1">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-black tracking-tighter leading-none">
              Fisco<span className="text-[#1657e8]">3</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-500 font-medium italic">
              Il team lo scegli tu!
            </p>
          </div>
          <div className="order-2 w-full">
            <HeroImage scrollY={scrollY} />
          </div>
          <div className="order-3 w-full">
            <DebtCard />
          </div>
          <div className="order-4 w-full">
            <SocialProofCta />
          </div>
          <div className="order-5 w-full">
            <OptimizationBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            La nostra proposta di valore:{" "}
            <span className="text-[#1657e8]">Libertà Fiscale</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
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
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-[#1657e8] transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900">
              Perché scegliere Fisco3?
            </h3>
            <ul className="space-y-4">
              {WHY_FISCO3.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg
                      className="w-4 h-4 text-[#1657e8]"
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
                  <span className="text-lg text-gray-700 font-medium">
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
    <section className="py-24 bg-[#1657e8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
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
            className="inline-flex items-center gap-3 bg-white text-[#1657e8] px-12 py-5 rounded-2xl text-xl font-bold transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-2xl"
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
      <ValueProposition />
      <FinalCta />
    </div>
  );
}
