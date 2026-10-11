// Metadati SEO per ogni pagina. Usati dal prerendering (scripts/prerender.js)
// e lato client a ogni cambio pagina (src/seo/useSeo.js).
import { studio } from "../config/studio";

export const OG_IMAGE = "/og/fisco3.png"; // 1200x630

export const ROUTES = [
  {
    path: "/",
    title: "Commercialisti a Catania | Fisco3, il team lo scegli tu",
    description:
      "Studio associato di commercialisti a Catania: cartelle esattoriali e rottamazioni, partite IVA e regime forfettario, 730. Scegli il professionista, la prima analisi è gratuita.",
  },
  {
    path: "/consulenze",
    title: "Richiedi l'analisi gratuita | Fisco3 Catania",
    description: `Raccontaci la tua situazione fiscale: ti risponde il professionista che se ne occupa entro ${studio.responseTime}. La prima analisi è gratuita.`,
  },
  {
    path: "/contabilita",
    title: "Contabilità per partite IVA e attività | Fisco3 Catania",
    description:
      "Tenuta della contabilità, fatturazione elettronica, scadenze e F24 con un commercialista di riferimento a Catania.",
  },
  {
    path: "/faq",
    title: "Domande frequenti | Fisco3 Catania",
    description:
      "Come lavora lo studio Fisco3, quanto costa, tempi di risposta e cosa succede dopo la prima analisi gratuita.",
  },
  {
    path: "/privacy-policy",
    title: "Informativa privacy | Fisco3",
    description: "Informativa sul trattamento dei dati personali di Fisco3.",
    noindex: true, // TODO: togliere quando c'è il testo ufficiale
  },
  {
    path: "/cookie-policy",
    title: "Cookie policy | Fisco3",
    description: "Informativa sull'uso dei cookie sul sito di Fisco3.",
    noindex: true, // TODO: togliere quando c'è il testo ufficiale
  },
  {
    // pagina interna per scegliere la palette: da rimuovere dopo la scelta
    path: "/anteprima-colori",
    title: "Anteprima colori | Fisco3",
    description: "Confronto tra le varianti di colore del sito.",
    noindex: true,
  },
  {
    path: "/404",
    title: "Pagina non trovata | Fisco3",
    description: "La pagina cercata non esiste.",
    noindex: true,
    file: "404.html",
  },
];

const NOT_FOUND = ROUTES[ROUTES.length - 1];

export const findRoute = (path) =>
  ROUTES.find((r) => r.path === path) ?? NOT_FOUND;

export const canonicalUrl = (path) =>
  studio.siteUrl + (path === "/" ? "/" : path);

// Dati strutturati AccountingService (solo homepage)
export function localBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: studio.legalName ?? studio.brandName,
    alternateName: studio.brandName,
    url: studio.siteUrl + "/",
    image: studio.siteUrl + OG_IMAGE,
    telephone: studio.phone.replace(/\s+/g, ""),
    email: studio.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.address.street,
      postalCode: studio.address.postalCode,
      addressLocality: studio.address.city,
      addressRegion: studio.address.province,
      addressCountry: "IT",
    },
    areaServed: "Catania",
  };
  if (studio.piva) data.vatID = studio.piva;
  if (studio.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: studio.geo.lat,
      longitude: studio.geo.lng,
    };
  }
  if (studio.openingHours) {
    data.openingHoursSpecification = studio.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schemaDays,
      opens: h.schemaOpens,
      closes: h.schemaCloses,
    }));
  }
  if (studio.google.rating && studio.google.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: studio.google.rating,
      reviewCount: studio.google.reviewCount,
    };
  }
  const sameAs = Object.values(studio.socials).filter(Boolean);
  if (studio.google.profileUrl) sameAs.push(studio.google.profileUrl);
  if (sameAs.length) data.sameAs = sameAs;
  return data;
}

// Tag <head> per una pagina, come stringa HTML (usata dal prerendering)
export function headTags(path) {
  const route = findRoute(path);
  const url = canonicalUrl(route.path);
  const image = studio.siteUrl + OG_IMAGE;
  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    route.noindex ? `<meta name="robots" content="noindex" />` : "",
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="it_IT" />`,
    `<meta property="og:site_name" content="${esc(studio.brandName)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Fisco3, commercialisti a Catania. Il team lo scegli tu." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  if (route.path === "/") {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(
        localBusinessJsonLd(),
      ).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return tags.filter(Boolean).join("\n    ");
}
