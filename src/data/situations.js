// Percorsi della pagina /analisi-gratuita: per ogni situazione le domande
// specifiche, cosa fa lo studio e cosa tenere pronto.
// `slug` è usato in /analisi-gratuita?tema=slug (un annuncio per situazione),
// `formLabel` è il valore inviato nel campo tipo_quesito,
// `situazione`, se presente, compila la colonna "Situazione" senza chiederla.

const FATTURATO = [
  "Fino a 30.000 €",
  "Da 30.000 a 85.000 €",
  "Oltre 85.000 €",
  "Non lo so ancora",
];

const CHI_SEI = [
  "Sono un privato",
  "Ho una partita IVA",
  "Ho una società",
];

export const SITUATION_FLOWS = [
  {
    slug: "cartelle",
    choice: "Ho ricevuto una cartella o un avviso",
    title: "Hai ricevuto una cartella o un avviso",
    formLabel: "Cartelle Esattoriali / Rottamazione",
    specialist: "il professionista che segue cartelle e rottamazioni",
    weDo: [
      "Leggiamo il documento con te e verifichiamo gli importi richiesti.",
      "Valutiamo le strade possibili: rottamazione, rateizzazione o altro.",
      "Ti diciamo cosa fare e entro quando.",
    ],
    prepare: "il documento che hai ricevuto (va bene anche una foto)",
    questions: [
      {
        id: "documento",
        label: "Cosa hai ricevuto?",
        options: [
          "Cartella esattoriale",
          "Avviso di accertamento",
          "Intimazione di pagamento",
          "Non so di cosa si tratta",
        ],
      },
      {
        id: "quando",
        label: "Quando l'hai ricevuto?",
        options: ["Negli ultimi 30 giorni", "Da 1 a 2 mesi", "Più di 2 mesi fa"],
      },
      {
        id: "importo",
        label: "Importo indicativo",
        options: ["Fino a 5.000 €", "Da 5.000 a 20.000 €", "Oltre 20.000 €", "Non lo so"],
      },
      { id: "situazione", label: "Chi ha ricevuto il documento?", options: CHI_SEI },
    ],
  },
  {
    slug: "apertura",
    choice: "Devo aprire una partita IVA",
    title: "Vuoi aprire una partita IVA",
    formLabel: "Apertura Partita IVA",
    situazione: "Devo aprire una partita IVA",
    specialist: "il professionista che segue partite IVA e forfettario",
    weDo: [
      "Verifichiamo se puoi accedere al regime forfettario.",
      "Scegliamo con te codice ATECO e cassa previdenziale.",
      "Apriamo la partita IVA e ti diciamo quanto mettere da parte per tasse e contributi.",
    ],
    prepare: "un'idea di cosa farai e di quanto pensi di incassare",
    questions: [
      {
        id: "attivita",
        label: "Che attività vuoi avviare?",
        options: [
          "Libera professione",
          "Commercio o artigianato",
          "Attività online o da creator",
          "Altro",
        ],
      },
      {
        id: "dipendente",
        label: "Hai anche un lavoro dipendente?",
        options: ["Sì", "No"],
      },
      { id: "fatturato", label: "Quanto pensi di fatturare il primo anno?", options: FATTURATO },
      {
        id: "quando",
        label: "Quando vuoi iniziare?",
        options: ["Subito", "Entro 3 mesi", "Sto ancora valutando"],
      },
    ],
  },
  {
    slug: "gestione",
    choice: "Ho una partita IVA e cerco un commercialista",
    title: "Hai una partita IVA da seguire",
    formLabel: "Gestione Partita IVA / Contabilità",
    situazione: "Ho già una partita IVA",
    specialist: "il professionista che segue partite IVA e contabilità",
    weDo: [
      "Controlliamo la tua situazione e le prossime scadenze.",
      "Verifichiamo che il tuo regime sia ancora quello più adatto.",
      "Ti seguiamo tutto l'anno, con lo stesso professionista come riferimento.",
    ],
    prepare: "l'ultima dichiarazione dei redditi, se ce l'hai",
    questions: [
      {
        id: "regime",
        label: "In che regime sei?",
        options: ["Forfettario", "Semplificato", "Ordinario", "Non lo so"],
      },
      { id: "fatturato", label: "Fatturato annuo indicativo", options: FATTURATO },
      {
        id: "oggi",
        label: "Oggi chi ti segue?",
        options: ["Faccio da solo", "Un altro commercialista", "Un servizio online"],
      },
    ],
  },
  {
    slug: "730",
    choice: "Devo fare il 730",
    title: "Devi fare il 730",
    formLabel: "Modello 730 / Rimborsi",
    situazione: "Sono un privato (dipendente, pensionato…)",
    specialist: "il professionista che segue 730 e contributi",
    weDo: [
      "Raccogliamo con te le spese che puoi detrarre.",
      "Prepariamo e inviamo il tuo 730.",
      "Ti spieghiamo il risultato: rimborso o importo da versare.",
    ],
    prepare: "la Certificazione Unica e le ricevute delle spese",
    questions: [
      {
        id: "lavoro",
        label: "Sei:",
        options: ["Dipendente", "Pensionato", "Altro"],
      },
      {
        id: "spese",
        label: "Hai spese da detrarre? (mediche, mutuo, affitto, figli…)",
        options: ["Sì", "No", "Non lo so"],
      },
      {
        id: "anno_scorso",
        label: "L'anno scorso il 730 l'hai fatto:",
        options: ["Da solo", "Con un CAF o un commercialista", "Non l'ho fatto"],
      },
    ],
  },
  {
    slug: "resto-al-sud",
    choice: "Voglio aprire un'attività con Resto al Sud",
    title: "Vuoi aprire un'attività con Resto al Sud",
    formLabel: "Resto al Sud / Finanziamenti",
    specialist: "il professionista che segue Resto al Sud",
    weDo: [
      "Verifichiamo se hai i requisiti per accedere.",
      "Ti aiutiamo a impostare il progetto.",
      "Ti seguiamo nella preparazione della domanda.",
    ],
    prepare: "una breve descrizione della tua idea",
    questions: [
      {
        id: "punto",
        label: "A che punto sei?",
        options: [
          "Ho solo l'idea",
          "Ho un progetto definito",
          "Ho già presentato domanda",
        ],
      },
      {
        id: "attivita_avviata",
        label: "Hai già un'attività avviata?",
        options: ["Sì", "No"],
      },
    ],
  },
  {
    slug: "altro",
    choice: "Altro",
    title: "Raccontaci di cosa hai bisogno",
    formLabel: "Altro",
    specialist: "il professionista più adatto alla tua richiesta",
    weDo: [
      "Leggiamo la tua richiesta.",
      "Ti mettiamo in contatto con il professionista giusto.",
    ],
    prepare: "eventuali documenti che riguardano la tua richiesta",
    questions: [{ id: "situazione", label: "Chi sei?", options: CHI_SEI }],
  },
];

// Vecchi link e annunci con ?tema=forfettario portano all'apertura
const ALIASES = { forfettario: "apertura" };

export const findFlow = (slug) =>
  SITUATION_FLOWS.find((f) => f.slug === (ALIASES[slug] ?? slug));
