# Fisco3

Sito web di Fisco3 — Studio Associato Commercialisti (Catania).

## Stack

- [Vite](https://vite.dev/) + React 19
- [React Router](https://reactrouter.com/) (routing lato client)
- [Tailwind CSS](https://tailwindcss.com/) (build-time, non via CDN)
- [lucide-react](https://lucide.dev/) per le icone
- Form di contatto gestito da [Web3Forms](https://web3forms.com/)
- Meta Pixel (Facebook), caricato solo dopo il consenso marketing
  (banner in `src/components/CookieBanner.jsx`)
- Font self-hosted (Source Serif 4, IBM Plex Sans) via `@fontsource`

## Dati dello studio

Tutti i dati (contatti, professionisti, prezzi, recensioni, orari, social…)
stanno in `src/config/studio.ts`. Ogni valore a `null` non viene mostrato:
per far comparire un elemento basta compilarlo lì. I `TODO` nel file
indicano cosa manca.

## Struttura

```
src/
├── config/studio.ts      # unica fonte dei dati dello studio
├── main.jsx              # idratazione nel browser (BrowserRouter)
├── entry-server.jsx      # render per il prerendering (StaticRouter)
├── App.jsx               # layout + route
├── components/           # Header, Footer, modulo, banner cookie, ui/, home/
├── pages/                # Home, Consulenze, Faq, Contabilita, policy, 404
├── data/                 # servizi e FAQ
├── lib/                  # consenso cookie, Meta Pixel, utilità
└── seo/                  # meta tag per pagina e JSON-LD
scripts/prerender.mjs     # genera l'HTML statico di ogni pagina
```

Route: `/`, `/consulenze`, `/contabilita`, `/faq`, `/privacy-policy`,
`/cookie-policy` (più `404.html`).

## Sviluppo

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build     # build client + SSR + prerendering di ogni pagina
npm run preview   # per testare la build in locale
```

## Nota sull'origine di questo codice

Il repository originale del progetto è andato perso. Questo codice è stato
ricostruito a partire dalla build di produzione minificata scaricata dal
sito live (`fisco3.it`) — struttura dei componenti, classi Tailwind, testi
e logica sono stati recuperati 1:1 dal bundle JS; solo i nomi interni dei
file/componenti sono stati riassegnati in modo leggibile, dato che la build
minificata non preservava quelli originali. Le due immagini (`team-hero.png`,
`team-office.png`) sono state scaricate direttamente dal sito live perché
assenti nello scraping iniziale.

## Deploy

Il sito è pensato per essere deployato su [Vercel](https://vercel.com/)
collegando questo repository e puntando i domini `www.fisco3.it` e `fisco3.it`
al progetto. `vercel.json` usa `cleanUrls`: `/faq` viene servito da
`dist/faq.html`.

L'URL unico del sito è `https://www.fisco3.it` (`siteUrl` in `studio.ts`):
canonical, Open Graph, JSON-LD e sitemap usano quello. `vercel.json`
reindirizza in modo permanente (308) `fisco3.it` verso `www.fisco3.it`; in
alternativa lo stesso redirect si può impostare dalla pagina Domains del
progetto su Vercel.

L'immagine Open Graph (`public/og/fisco3.png`) contiene indirizzo e
telefono: se cambiano, va rigenerata.
