// Argomenti di consulenza. `slug` è usato in /consulenze?tema=slug,
// `formLabel` è il valore inviato nel campo tipo_quesito del modulo.
export const SERVICES = [
  {
    slug: "cartelle",
    label: "Cartelle esattoriali e rottamazioni",
    tab: "Cartelle esattoriali",
    summary: "Rottamazione, rateizzazione, verifica degli importi",
    situation: "Ho ricevuto una cartella esattoriale",
    // DA VALIDARE CON LO STUDIO
    weDo: [
      "Leggiamo la cartella con te e verifichiamo importi, sanzioni e interessi voce per voce.",
      "Controlliamo i termini e ti diciamo se conviene pagare, rateizzare o aderire alla definizione agevolata.",
    ],
    // DA VALIDARE CON LO STUDIO
    bring: [
      "Copia della cartella o dell'avviso ricevuto",
      "Eventuali comunicazioni precedenti dell'Agenzia delle Entrate Riscossione",
    ],
    formLabel: "Cartelle Esattoriali / Rottamazione",
  },
  {
    slug: "forfettario",
    label: "Partite IVA e regime forfettario",
    tab: "Partita IVA forfettaria",
    summary: "Apertura, requisiti del forfettario, scadenze e versamenti",
    situation: "Voglio aprire una partita IVA forfettaria",
    // DA VALIDARE CON LO STUDIO
    weDo: [
      "Verifichiamo se hai i requisiti per il regime forfettario e scegliamo con te il codice attività.",
      "Apriamo la partita IVA e ti avvisiamo per tempo di scadenze e versamenti.",
    ],
    // DA VALIDARE CON LO STUDIO
    bring: [
      "Documento d'identità e codice fiscale",
      "Descrizione dell'attività che vuoi svolgere",
      "Stima dei ricavi del primo anno",
    ],
    formLabel: "Regime Forfettario",
  },
  {
    slug: "730",
    label: "730 e contributi",
    tab: "730 e contributi",
    summary: "Dichiarazione, spese detraibili, rimborsi",
    situation: "Devo fare il 730",
    // DA VALIDARE CON LO STUDIO
    weDo: [
      "Controlliamo con te le spese detraibili, così non perdi nessuna detrazione.",
      "Prepariamo e inviamo il 730 e ti diciamo quando arriva il rimborso o quanto c'è da versare.",
    ],
    // DA VALIDARE CON LO STUDIO
    bring: [
      "Certificazione Unica",
      "Scontrini e fatture delle spese mediche",
      "Ricevute di spese detraibili: scuola, sport, affitto, interessi del mutuo",
    ],
    formLabel: "Modello 730 / Rimborsi",
  },
  {
    slug: "resto-al-sud",
    label: "Resto al Sud",
    situation: "Voglio aprire un'attività con Resto al Sud",
    // DA VALIDARE CON LO STUDIO
    weDo: [
      "Verifichiamo se tu e la tua idea avete i requisiti per accedere a Resto al Sud.",
      "Ti seguiamo nella preparazione della domanda e del piano delle spese.",
    ],
    // DA VALIDARE CON LO STUDIO
    bring: [
      "Documento d'identità",
      "Descrizione dell'idea di attività",
      "Preventivi delle spese che prevedi di sostenere",
    ],
    formLabel: "Resto al Sud / Finanziamenti",
  },
];

export const OTHER_TOPIC = "Altro";

// Le tre specialità del team, nell'ordine del sottotitolo dell'hero
export const SPECIALTIES = SERVICES.filter((s) =>
  ["cartelle", "forfettario", "730"].includes(s.slug),
);

export const findService = (slug) => SERVICES.find((s) => s.slug === slug);
