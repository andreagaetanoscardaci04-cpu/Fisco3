// Tema grafico del sito, in attesa della scelta su /anteprima-colori.
// "A" palette attuale; "B" nuova palette con gradienti tonali;
// "C" come B, con l'ocra sui piccoli elementi decorativi.
export const TEMA_SITO = "A";

export const isNuovaPalette = (tema) => tema === "B" || tema === "C";
export const hasOcra = (tema) => tema === "C";

// Ritmo delle sezioni con la nuova palette, dall'alto:
// hero (gradiente chiaro), Carta, Pietra, cartelle (gradiente scuro),
// Carta, Pietra, ..., CTA finale (gradiente scuro), footer (gradiente scuro).
// Due sezioni scure non sono mai adiacenti, tranne CTA finale e footer, che
// sono separati da un bordo inchiostro-bordo (#1E2D4F).
export const RITMO_CHIARO = ["carta", "pietra"];
