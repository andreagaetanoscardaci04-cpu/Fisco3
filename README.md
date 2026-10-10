# Fisco3

Sito web di Fisco3 — Studio Associato Commercialisti (Catania).

## Stack

- [Vite](https://vite.dev/) + React 19
- [React Router](https://reactrouter.com/) (routing lato client)
- [Tailwind CSS](https://tailwindcss.com/) (build-time, non via CDN)
- [lucide-react](https://lucide.dev/) per le icone
- Form di contatto gestito da [Web3Forms](https://web3forms.com/)
- Meta Pixel (Facebook) per il tracciamento

## Struttura

```
src/
├── main.jsx              # entry point
├── App.jsx               # router + layout (Header/Footer)
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ConsulenzaForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Consulenze.jsx
│   ├── Faq.jsx
│   └── Contabilita.jsx
└── data/
    ├── services.jsx
    └── faq.js
```

Route disponibili: `/`, `/consulenze`, `/faq`, `/contabilita`.

## Sviluppo

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
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
collegando questo repository e puntando il dominio `fisco3.it` al progetto.
