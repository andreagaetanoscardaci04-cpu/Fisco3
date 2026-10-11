// Consenso cookie salvato in localStorage.
// Per passare a iubenda: sostituire getConsent/saveConsent con le API di
// iubenda (_iub.cs.api) mantenendo la stessa forma { marketing: boolean }.

const KEY = "fisco3-consenso-cookie";
const VERSION = 1;

export function getConsent() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data.version === VERSION ? data : null;
  } catch {
    return null;
  }
}

export function saveConsent({ marketing }) {
  const data = { version: VERSION, marketing, date: new Date().toISOString() };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // storage non disponibile: la scelta vale solo per questa visita
  }
  window.dispatchEvent(new CustomEvent("fisco3:consenso", { detail: data }));
  return data;
}

export function hasMarketingConsent() {
  return getConsent()?.marketing === true;
}
