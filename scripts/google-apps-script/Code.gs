// Riceve le richieste del modulo di /consulenze e le inoltra per email.
// Istruzioni di pubblicazione in scripts/google-apps-script/README.md.

const DESTINATARIO = "studi.greco@gmail.com";

const CAMPI = [
  ["nome", "Nome e cognome"],
  ["email", "Email"],
  ["telefono", "Telefono"],
  ["tipo_quesito", "Di cosa ha bisogno"],
  ["professionista", "Professionista"],
  ["messaggio", "Messaggio"],
  ["privacy", "Privacy"],
  ["pagina_provenienza", "Pagina di provenienza"],
  ["pagina_modulo", "Pagina del modulo"],
];

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
    "</table>";

  try {
    MailApp.sendEmail({
      to: DESTINATARIO,
      replyTo: email,
      name: "Sito Fisco3",
      subject: `Nuova richiesta di consulenza: ${nome}`,
      body: testo,
      htmlBody: html,
    });
  } catch (err) {
    return risposta({ success: false, error: String(err) });
  }

  return risposta({ success: true });
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
