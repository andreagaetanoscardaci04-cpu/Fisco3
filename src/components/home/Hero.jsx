import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import {
  studio,
  heroProfessionals,
  phoneHref,
  whatsappHref,
} from "../../config/studio";
import { SPECIALTIES } from "../../data/services.js";
import { TEMA_SITO, isNuovaPalette } from "../../config/tema.js";

const STYLES = {
  attuale: {
    section: "bg-brand-50/60",
    title: "text-slate-900",
    highlight: "text-brand-600",
    text: "text-slate-600",
    phoneIcon: "text-brand-600",
    photo: "bg-slate-100 ring-slate-900/5",
    card: "ring-slate-900/5 hover:ring-brand-300",
    iconBox:
      "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white",
    cardTitle: "text-slate-900",
    cardSubtitle: "text-slate-500",
    cardCta: "text-brand-600",
  },
  // nuova palette: il blu resta solo su pulsanti e link
  nuova: {
    section: "bg-tonale-chiaro",
    title: "text-inchiostro",
    highlight: "text-inchiostro",
    text: "text-basalto",
    phoneIcon: "text-fisco",
    photo: "bg-pietra ring-inchiostro/5",
    card: "ring-pietra hover:ring-fisco",
    iconBox:
      "bg-fisco-tenue text-inchiostro group-hover:bg-inchiostro group-hover:text-white",
    cardTitle: "text-inchiostro",
    cardSubtitle: "text-basalto",
    cardCta: "text-fisco",
  },
};

const SPECIALTY_ICONS = {
  cartelle: ShieldCheck,
  forfettario: Briefcase,
  730: FileText,
};

// Una scheda per specialità (o per professionista, quando ci sono i dati)
function ChoiceCard({ s, to, icon: Icon, photo, title, subtitle, cta }) {
  return (
    <Link
      to={to}
      className={`group flex h-full items-center gap-4 rounded-lg bg-white p-5 shadow-card ring-1 transition-colors duration-200 md:p-6 ${s.card}`}
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          className={`h-16 w-16 shrink-0 rounded-lg object-cover object-top ${s.photo}`}
        />
      ) : (
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg transition-colors ${s.iconBox}`}>
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
      )}
      <span className="min-w-0 flex-1 text-left">
        <span className={`block font-semibold leading-snug ${s.cardTitle}`}>
          {title}
        </span>
        {subtitle && (
          <span className={`mt-0.5 block text-sm ${s.cardSubtitle}`}>
            {subtitle}
          </span>
        )}
        <span className={`mt-1.5 inline-flex items-center gap-1 text-sm font-semibold ${s.cardCta}`}>
          {cta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </span>
    </Link>
  );
}

function Choices({ s }) {
  if (heroProfessionals.length > 0) {
    return heroProfessionals.map((p) => (
      <li key={p.slug}>
        <ChoiceCard
          s={s}
          to={`/consulenze?prof=${p.slug}`}
          photo={p.photo}
          title={p.name}
          subtitle={p.specialties[0]}
          cta={`Parla con ${p.name.split(" ")[0]}`}
        />
      </li>
    ));
  }
  return SPECIALTIES.map((sp) => (
    <li key={sp.slug}>
      <ChoiceCard
        s={s}
        to={`/consulenze?tema=${sp.slug}`}
        icon={SPECIALTY_ICONS[sp.slug]}
        title={sp.label}
        cta="Parla con lo specialista"
      />
    </li>
  ));
}

// In /anteprima-colori l'hero compare più volte: livelli dei titoli
// configurabili, così la pagina ha un solo h1.
export default function Hero({ tema = TEMA_SITO, titleAs: Title = "h1", subtitleAs: Subtitle = "h2" }) {
  const s = STYLES[isNuovaPalette(tema) ? "nuova" : "attuale"];
  return (
    <section className={`relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20 ${s.section}`}>
      <Container className="relative">
        <div className="reveal mx-auto max-w-5xl text-center">
          <Title className={`text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tightest sm:text-6xl lg:text-[4.25rem] ${s.title}`}>
            <span className="sm:block">Commercialisti a Catania.</span>{" "}
            <span className={`block ${s.highlight}`}>
              Il&nbsp;team lo scegli tu.
            </span>
          </Title>
          <p className={`mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl ${s.text}`}>
            Tre professionisti, tre specialità: cartelle esattoriali e
            rottamazioni, partite IVA e regime forfettario, 730 e contributi.
            Scegli con chi parlare: la prima analisi è gratuita.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/consulenze" size="lg" tema={tema}>
              Richiedi l'analisi gratuita
            </Button>
            {whatsappHref ? (
              <Button href={whatsappHref} variant="secondary" size="lg" tema={tema}>
                Scrivici su WhatsApp
              </Button>
            ) : (
              <Button href={phoneHref} variant="secondary" size="lg" tema={tema}>
                <Phone aria-hidden="true" className={`h-4 w-4 ${s.phoneIcon}`} />
                Chiama lo studio
              </Button>
            )}
          </div>

          <p className={`mt-5 text-[15px] ${s.text}`}>
            Ti ricontattiamo entro {studio.responseTime}.
          </p>
        </div>

        <div className="reveal reveal-delay mx-auto mt-14 max-w-5xl md:mt-16">
          {studio.images.team && (
            <div className={`overflow-hidden rounded-lg shadow-elevated ring-1 ${s.photo}`}>
              <img
                src={studio.images.team}
                srcSet={
                  studio.images.teamSmall
                    ? `${studio.images.teamSmall} 768w, ${studio.images.team} 1536w`
                    : undefined
                }
                sizes="(min-width: 1024px) 1024px, 100vw"
                alt={`Il team di ${studio.brandName}`}
                width="1536"
                height="1024"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover object-top sm:aspect-[16/9]"
              />
            </div>
          )}

          <div
            className={`relative px-0 sm:px-6 ${
              studio.images.team ? "-mt-10 md:-mt-14" : ""
            }`}
          >
            <Subtitle className="sr-only">Scegli con chi parlare</Subtitle>
            <ul className="grid gap-3 md:grid-cols-3 md:gap-5">
              <Choices s={s} />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
