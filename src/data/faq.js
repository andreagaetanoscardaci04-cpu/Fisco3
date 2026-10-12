import { studio } from "../config/studio";

const { clientPortal, fullyDigital } = studio.features;
const hasPricing = studio.pricing.length > 0;

// `link` facoltativo: mostrato sotto la risposta

export const FAQ_ITEMS = [
  {
    question: "Cos'è Fisco3 e come funziona?",
    answer:
      "Fisco3 è uno studio associato di commercialisti con sede a Catania, un punto di riferimento in Sicilia. Seguiamo clienti in studio e, a distanza, in tutta Italia: i forfettari, ad esempio, li gestiamo ovunque.",
  },
  {
    question: "Quanto costa il servizio?",
    answer:
      "La consulenza iniziale è sempre gratuita. Successivamente, offriamo diversi pacchetti annuali in base al regime fiscale e ai servizi richiesti, con prezzi trasparenti e senza sorprese." +
      (hasPricing
        ? " Trovi i pacchetti con il prezzo di partenza nella homepage."
        : ""),
    link: hasPricing
      ? { to: "/#pacchetti", label: "Vedi i pacchetti e i prezzi" }
      : null,
  },
  {
    question: "Posso aprire la Partita IVA con voi?",
    answer:
      "Certamente. Uno dei nostri commercialisti ti guiderà passo-passo nell’apertura della Partita IVA, spiegandoti i costi, i tempi e le pratiche da seguire" +
      (fullyDigital ? ", il tutto in modo 100% digitale." : "."),
  },
  {
    question: "Seguite anche regimi forfettari, semplificati e ordinari?",
    answer:
      "Sì. Seguiamo clienti in regime forfettario, semplificato e ordinario e ti aiutiamo a scegliere quello più adatto alla tua attività.",
  },
  {
    question: "Fornite anche assistenza per fatturazione elettronica?",
    answer:
      clientPortal
        ? "Sì. Offriamo una piattaforma facile da usare per la creazione e l’invio di fatture elettroniche, compatibile con l’Agenzia delle Entrate, oltre a supporto per qualsiasi dubbio tecnico o fiscale."
        : "Sì. Ti assistiamo nell’emissione e nella ricezione delle fatture elettroniche e rispondiamo ai dubbi tecnici e fiscali.",
  },
  {
    question: "Quanto tempo ci vuole per ricevere una risposta?",
    answer:
      `Rispondiamo entro ${studio.responseTime}. Puoi contattarci via email, telefono o direttamente tramite il nostro sito.`,
  },
  {
    question: "Posso fare una consulenza gratuita senza impegno?",
    answer:
      "Sì. La prima consulenza è sempre gratuita e non vincolante. Serve a capire le tue esigenze, valutare il regime fiscale più adatto e spiegarti come lavoriamo.",
  },
  {
    question: "Cosa succede dopo la consulenza gratuita?",
    answer:
      "Dopo la consulenza puoi decidere in completa autonomia se attivare uno dei nostri piani. Se scegli di continuare con noi, ci occupiamo degli adempimenti e della tua contabilità, con il professionista che ti ha seguito nell'analisi.",
  },
];
