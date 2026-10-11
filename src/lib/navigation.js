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
