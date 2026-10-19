// Ricorda la pagina precedente all'interno del sito, per il campo
// nascosto "pagina di provenienza" del modulo.
let currentPath = null;
let previousPath = null;

export function trackPath(path) {
  if (path === currentPath) return;
  previousPath = currentPath;
  currentPath = path;
}

export function getSourcePage() {
  if (previousPath) return previousPath;
  if (typeof document !== "undefined" && document.referrer) {
    return document.referrer;
  }
  return "accesso diretto";
}

// Parametri della campagna (link in bio, annunci) letti al primo ingresso
// nel sito e conservati per la sessione, anche se si cambia pagina.
const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "fbclid",
];
const CAMPAIGN_STORAGE = "fisco3_campagna";

export function captureCampaign() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found = CAMPAIGN_KEYS.filter((k) => params.get(k));
  if (!found.length) return;
  try {
    sessionStorage.setItem(
      CAMPAIGN_STORAGE,
      JSON.stringify(Object.fromEntries(found.map((k) => [k, params.get(k)]))),
    );
  } catch {
    // archiviazione non disponibile: i parametri si perdono, il modulo funziona
  }
}

export function getCampaign() {
  try {
    return JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE)) ?? {};
  } catch {
    return {};
  }
}
