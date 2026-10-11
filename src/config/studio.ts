// Unica fonte di verità per tutti i dati dello studio.
// Regola: ogni valore a null NON viene mostrato sul sito.
// Nessun componente deve contenere dati dello studio scritti a mano.

export type Professional = {
  slug: string | null; // usato in /consulenze?prof=slug
  name: string | null;
  role: string | null; // es. "Dottore Commercialista"
  albo: string | null; // es. "ODCEC Catania n. 1234/A"
  specialties: string[]; // la prima è mostrata nell'hero
  bio: string | null;
  photo: string | null; // percorso in /public, es. "/team/nome.jpg"
  videoUrl: string | null; // URL embed (YouTube/Vimeo)
};

export type PricingPackage = {
  name: string;
  target: string; // a chi è rivolto
  priceFrom: number; // euro/anno, IVA esclusa
  includes: string[];
};

export type OpeningHours = {
  label: string; // es. "Lunedì–Venerdì"
  hours: string; // es. "9:00–13:00 · 15:30–19:00"
  schemaDays: string[]; // es. ["Monday", "Tuesday"]
  schemaOpens: string; // es. "09:00"
  schemaCloses: string; // es. "13:00"
};

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

const emptyProfessional = (): Professional => ({
  slug: null, // TODO
  name: null, // TODO
  role: null, // TODO
  albo: null, // TODO: numero di iscrizione all'Albo ODCEC
  specialties: [], // TODO
  bio: null, // TODO
  photo: null, // TODO: foto reale (niente stock/AI)
  videoUrl: null, // TODO (facoltativo)
});

export const studio = {
  siteUrl: "https://fisco3.it",
  brandName: "Fisco3",
  studioName: null as string | null, // TODO: es. "Studio Associato Greco ..."
  legalName: null as string | null, // TODO: ragione sociale esatta ("Studio Associato ...")
  piva: null as string | null, // TODO

  email: "studi.greco@gmail.com",
  phone: "+39 095 535 298",
  whatsappNumber: null as string | null, // TODO: formato internazionale senza spazi, es. "393331234567"
  address: {
    full: "Via Giuseppe Simili, 63, 95129 Catania CT",
    street: "Via Giuseppe Simili, 63",
    postalCode: "95129",
    city: "Catania",
    province: "CT",
    short: "Via Giuseppe Simili, Catania",
  },
  geo: null as { lat: number; lng: number } | null, // TODO: coordinate esatte dello studio
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.675005886616!2d15.093719476451233!3d37.5147695481955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzUzLjIiTiAxNcKwMDUnNDYuNyJF!5e0!3m2!1sit!2sit!4v1740000000000!5m2!1sit!2sit",

  responseTime: "48/72 ore lavorative",
  foundedYear: null as number | null, // TODO
  openingHours: null as OpeningHours[] | null, // TODO
  clientCount: null as number | null, // TODO: numero reale di clienti seguiti

  socials: {
    instagram: null as string | null, // TODO
    facebook: null as string | null, // TODO
    linkedin: null as string | null, // TODO
  },

  google: {
    rating: null as number | null, // TODO: es. 4.9
    reviewCount: null as number | null, // TODO
    profileUrl: null as string | null, // TODO: link alla scheda Google
  },

  reviews: [] as Review[], // TODO: recensioni reali, con consenso

  professionals: [
    emptyProfessional(),
    emptyProfessional(),
    emptyProfessional(),
  ] as Professional[],

  pricing: [] as PricingPackage[], // TODO: pacchetti con prezzo "a partire da"

  // Funzionalità da mostrare solo se verificate con lo studio
  features: {
    clientPortal: false, // TODO: esiste un portale clienti per la fatturazione?
    encryptedArchive: false, // TODO: archivio documenti cifrato accessibile online?
    fullyDigital: false, // TODO: il servizio è interamente gestibile a distanza?
  },

  images: {
    // TODO: immagine generata con AI, sostituire con una foto reale dello studio (o null per nasconderla)
    office: "/team-office.png" as string | null,
  },
};

// Helper
export const phoneHref = `tel:${studio.phone.replace(/\s+/g, "")}`;
export const emailHref = `mailto:${studio.email}`;
export const whatsappHref = studio.whatsappNumber
  ? `https://wa.me/${studio.whatsappNumber}`
  : null;

export const namedProfessionals = studio.professionals.filter(
  (p) => p.slug && p.name,
);

// L'hero mostra le schede solo se tutti e tre hanno nome e foto
export const heroProfessionals =
  namedProfessionals.length === studio.professionals.length &&
  namedProfessionals.every((p) => p.photo)
    ? namedProfessionals
    : [];

export const yearsActive = studio.foundedYear
  ? new Date().getFullYear() - studio.foundedYear
  : null;

export const hasAlbo = studio.professionals.some((p) => p.albo);
