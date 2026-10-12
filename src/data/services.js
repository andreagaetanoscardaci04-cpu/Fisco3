// Argomenti di consulenza. `slug` è usato in /consulenze?tema=slug,
// `formLabel` è il valore inviato nel campo tipo_quesito del modulo.
export const SERVICES = [
  {
    slug: "cartelle",
    label: "Cartelle esattoriali e rottamazioni",
    situation: "Ho ricevuto una cartella esattoriale",
    description:
      "Leggiamo la cartella con te, verifichiamo gli importi e ti diciamo se conviene la rottamazione o la rateizzazione.",
    ctaLabel: "Richiedi l'analisi della cartella",
    formLabel: "Cartelle Esattoriali / Rottamazione",
  },
  {
    slug: "forfettario",
    label: "Partite IVA e regime forfettario",
    situation: "Ho o voglio aprire una partita IVA forfettaria",
    description:
      "Verifichiamo se puoi accedere al forfettario, apriamo la partita IVA e teniamo sotto controllo scadenze e versamenti. Seguiamo forfettari in tutta Italia, anche a distanza.",
    ctaLabel: "Richiedi l'analisi per la partita IVA",
    formLabel: "Regime Forfettario",
  },
  {
    slug: "730",
    label: "730 e contributi",
    situation: "Devo fare il 730",
    description:
      "Prepariamo e inviamo il tuo 730, controllando con te le spese detraibili da inserire.",
    ctaLabel: "Richiedi l'analisi per il 730",
    formLabel: "Modello 730 / Rimborsi",
  },
  {
    slug: "resto-al-sud",
    label: "Resto al Sud",
    situation: "Voglio aprire un'attività con Resto al Sud",
    description:
      "Verifichiamo se hai i requisiti e ti seguiamo nella preparazione della domanda.",
    ctaLabel: "Richiedi l'analisi per Resto al Sud",
    formLabel: "Resto al Sud / Finanziamenti",
  },
];

export const OTHER_TOPIC = "Altro";

// Le tre specialità del team, nell'ordine del sottotitolo dell'hero
export const SPECIALTIES = SERVICES.filter((s) =>
  ["cartelle", "forfettario", "730"].includes(s.slug),
);

export const findService = (slug) => SERVICES.find((s) => s.slug === slug);
