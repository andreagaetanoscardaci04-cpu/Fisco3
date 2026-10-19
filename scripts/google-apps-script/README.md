# Invio del modulo con Google Apps Script

I moduli di `/consulenze` e `/analisi-gratuita` inviano i dati a uno script
Google Apps Script (`Code.gs`), che li inoltra per email a `DESTINATARIO` e
li aggiunge a un foglio Google ("Richieste sito Fisco3"), con le colonne
Esito / Diventato cliente? / Note da compilare a mano dopo la telefonata.

Il progetto pubblicato si chiama **Modulo Fisco3** nell'account
studi.greco@gmail.com. Foglio delle richieste:
<https://docs.google.com/spreadsheets/d/1_-c7_E73LtCRVgiEYXPiDjWYUl0WnoL55jLe3gsQM_k/edit>

## Link da usare nella bio e negli annunci

`https://www.fisco3.it/analisi-gratuita?utm_source=instagram&utm_medium=bio`

Per gli annunci cambia `utm_medium=ads` e aggiungi `utm_campaign=<nome>` e
`utm_content=<annuncio>`: finiscono nelle colonne del foglio.

## Pubblicazione

1. Accedi con l'account Google da cui devono partire le email e apri
   <https://script.google.com> → **Nuovo progetto**.
2. Incolla il contenuto di `Code.gs` al posto del codice di esempio e salva.
3. **Esegui il deployment → Nuovo deployment** → tipo **Applicazione web**:
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
4. Autorizza i permessi richiesti (invio email).
5. Nell'editor scegli la funzione `creaFoglio` e clicca **Esegui**: crea il
   foglio e chiede il permesso di usare Fogli Google.
6. Copia l'URL che termina con `/exec` e incollalo in `FORM_ENDPOINT` in
   `src/components/ConsulenzaForm.jsx`.

## Modifiche successive

Dopo aver cambiato il codice dello script: **Esegui il deployment → Gestisci
deployment → modifica (matita) → Versione: Nuova versione**. Così l'URL
resta lo stesso; un "Nuovo deployment" crea invece un URL diverso.

MailApp ha un limite di circa 100 email al giorno con un account Gmail
gratuito (1.500 con Google Workspace).
