// Riceve le richieste dei moduli del sito (/consulenze e /analisi-gratuita),
// le inoltra per email e le registra in un foglio Google.
// Istruzioni di pubblicazione in scripts/google-apps-script/README.md.

const DESTINATARIO = "studi.greco@gmail.com";
const NOME_FOGLIO = "Richieste sito Fisco3";

// [campo del modulo, etichetta]: ordine dell'email e delle colonne del foglio
const CAMPI = [
  ["nome", "Nome e cognome"],
  ["email", "Email"],
  ["telefono", "Telefono"],
  ["situazione", "Situazione"],
  ["tipo_quesito", "Di cosa ha bisogno"],
  ["professionista", "Professionista"],
  ["messaggio", "Messaggio"],
  ["privacy", "Privacy"],
  ["pagina_provenienza", "Pagina di provenienza"],
  ["pagina_modulo", "Pagina del modulo"],
  ["utm_source", "Fonte (utm_source)"],
  ["utm_medium", "Mezzo (utm_medium)"],
  ["utm_campaign", "Campagna (utm_campaign)"],
  ["utm_content", "Annuncio (utm_content)"],
  ["fbclid", "fbclid"],
];

// Colonne compilate a mano dallo studio dopo la telefonata
const COLONNE_STUDIO = ["Esito", "Diventato cliente?", "Note"];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Campo trappola: i bot lo compilano, le persone non lo vedono
  if (p.sito_web) return risposta({ success: true });

  const nome = (p.nome || "").trim();
  const email = (p.email || "").trim();
  const telefono = (p.telefono || "").trim();
  if (!nome || !email || !telefono) {
    return risposta({ success: false, error: "Campi obbligatori mancanti" });
  }

  // Email e foglio sono indipendenti: se uno dei due fallisce la richiesta
  // non va comunque persa
  const errori = [];
  try {
    inviaEmail(p, nome, email);
  } catch (err) {
    errori.push("email: " + err);
  }
  try {
    registraNelFoglio(p);
  } catch (err) {
    errori.push("foglio: " + err);
  }
  if (errori.length) console.error(errori.join(" | "));

  return risposta({ success: errori.length < 2 });
}

function inviaEmail(p, nome, email) {
  const righe = CAMPI.filter(([k]) => p[k]).map(([k, etichetta]) => [
    etichetta,
    String(p[k]),
  ]);

  const testo = righe.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html =
    '<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    righe
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top">${escape(k)}</td>` +
          `<td style="padding:6px 0;white-space:pre-wrap">${escape(v)}</td></tr>`,
      )
      .join("") +
    "</table>" +
    (foglioUrl()
      ? `<p style="font-family:Arial,sans-serif;font-size:13px;margin-top:16px"><a href="${foglioUrl()}">Apri il foglio delle richieste</a></p>`
      : "");

  MailApp.sendEmail({
    to: DESTINATARIO,
    replyTo: email,
    name: "Sito Fisco3",
    subject: `Nuova richiesta di consulenza: ${nome}`,
    body: testo,
    htmlBody: html,
  });
}

function registraNelFoglio(p) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const foglio = apriFoglio().getSheets()[0];
    foglio.appendRow([
      new Date(),
      ...CAMPI.map(([k]) => p[k] || ""),
      ...COLONNE_STUDIO.map(() => ""),
    ]);
  } finally {
    lock.releaseLock();
  }
}

// Il foglio viene creato alla prima richiesta, nel Drive dell'account
// che ha pubblicato lo script
function apriFoglio() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty("SHEET_ID");
  if (id) return SpreadsheetApp.openById(id);

  const ss = SpreadsheetApp.create(NOME_FOGLIO);
  const foglio = ss.getSheets()[0];
  const intestazioni = [
    "Data",
    ...CAMPI.map(([, etichetta]) => etichetta),
    ...COLONNE_STUDIO,
  ];
  foglio.appendRow(intestazioni);
  foglio.setFrozenRows(1);
  foglio.getRange(1, 1, 1, intestazioni.length).setFontWeight("bold");
  props.setProperty("SHEET_ID", ss.getId());
  return ss;
}

function foglioUrl() {
  const id = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  return id ? `https://docs.google.com/spreadsheets/d/${id}/edit` : null;
}

// Da eseguire una volta dall'editor (Esegui → creaFoglio): chiede i permessi
// per Fogli Google, crea il foglio e ne scrive l'indirizzo nel log
function creaFoglio() {
  console.log(apriFoglio().getUrl());
}

function escape(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function risposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
