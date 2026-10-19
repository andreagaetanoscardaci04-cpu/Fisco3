# Invio del modulo con Google Apps Script

Il modulo di `/consulenze` invia i dati a uno script Google Apps Script
(`Code.gs`), che li inoltra per email a `DESTINATARIO`.

## Pubblicazione

1. Accedi con l'account Google da cui devono partire le email e apri
   <https://script.google.com> → **Nuovo progetto**.
2. Incolla il contenuto di `Code.gs` al posto del codice di esempio e salva.
3. **Esegui il deployment → Nuovo deployment** → tipo **Applicazione web**:
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
4. Autorizza i permessi richiesti (invio email).
5. Copia l'URL che termina con `/exec` e incollalo in `FORM_ENDPOINT` in
   `src/components/ConsulenzaForm.jsx`.

## Modifiche successive

Dopo aver cambiato il codice dello script: **Esegui il deployment → Gestisci
deployment → modifica (matita) → Versione: Nuova versione**. Così l'URL
resta lo stesso; un "Nuovo deployment" crea invece un URL diverso.

MailApp ha un limite di circa 100 email al giorno con un account Gmail
gratuito (1.500 con Google Workspace).
