import { hasMarketingConsent } from "./consent.js";
import { getCampaign, getSourcePage } from "./navigation.js";

// URL /exec dell'applicazione web Google Apps Script
// (vedi scripts/google-apps-script/README.md)
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwtXwVv_oXyfFfWEmp6uhCRVCaAtqTWVVYve1WLX5RJjbgW-9079yr3TgPkwgwNLaE4zw/exec";

export const SEND_ERRORS = {
  service:
    "La richiesta non è stata inviata per un errore del servizio. Riprova tra qualche minuto oppure chiamaci.",
  network:
    "La richiesta non è stata inviata: controlla la connessione a internet e riprova, oppure chiamaci.",
};

// Invia una richiesta allo studio. Restituisce null se è andata a buon
// fine, altrimenti il messaggio d'errore da mostrare.
export async function sendRequest(formData) {
  formData.append("pagina_provenienza", getSourcePage());
  formData.append(
    "pagina_modulo",
    window.location.pathname + window.location.search,
  );
  for (const [key, value] of Object.entries(getCampaign())) {
    formData.append(key, value);
  }

  try {
    // Corpo urlencoded: Apps Script lo legge in e.parameter e il browser
    // non fa la richiesta preliminare CORS
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: new URLSearchParams(formData),
    });
    const result = await response.json();
    if (!result.success) return SEND_ERRORS.service;
  } catch {
    return SEND_ERRORS.network;
  }

  if (hasMarketingConsent() && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
  return null;
}
