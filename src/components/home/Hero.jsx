import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CircleCheck,
  FileText,
  MapPin,
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

const SPECIALTY_ICONS = {
  cartelle: ShieldCheck,
  forfettario: Briefcase,
  730: FileText,
};

const REASSURANCE = [
  "Prima analisi gratuita",
  `Risposta entro ${studio.responseTime}`,
  "Nessun impegno",
];

// Una scheda per specialità (o per professionista, quando ci sono i dati)
function ChoiceCard({ to, icon: Icon, photo, title, subtitle, cta }) {
  return (
    <Link
      to={to}
      className="group flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-card ring-1 ring-slate-900/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6"
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          className="h-14 w-14 shrink-0 rounded-2xl bg-slate-100 object-cover"
        />
      ) : (
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
      )}
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-semibold leading-snug text-slate-900">
          {title}
        </span>
        {subtitle && (
          <span className="mt-0.5 block text-sm text-slate-500">
            {subtitle}
          </span>
        )}
        <span className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          {cta}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}

function Choices() {
  if (heroProfessionals.length > 0) {
    return heroProfessionals.map((p) => (
      <li key={p.slug}>
        <ChoiceCard
          to={`/consulenze?prof=${p.slug}`}
          photo={p.photo}
          title={p.name}
          subtitle={p.specialties[0]}
          cta={`Parla con ${p.name.split(" ")[0]}`}
        />
      </li>
    ));
  }
  return SPECIALTIES.map((s) => (
    <li key={s.slug}>
      <ChoiceCard
        to={`/consulenze?tema=${s.slug}`}
        icon={SPECIALTY_ICONS[s.slug]}
        title={s.label}
        cta="Parla con lo specialista"
      />
    </li>
  ));
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pb-16 pt-14 md:pb-24 md:pt-20">
      <Container className="relative">
        <div className="reveal mx-auto max-w-5xl text-center">
          <p className="eyebrow">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Studio associato
            <span aria-hidden="true">·</span>
            Catania
          </p>
          <h1 className="mt-6 text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tightest text-slate-900 sm:text-6xl lg:text-[4.25rem]">
            <span className="sm:block">Commercialisti a Catania.</span>{" "}
            <span className="block text-brand-600">
              Il&nbsp;team lo scegli tu.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 md:text-xl">
            Tre professionisti, tre specialità: cartelle esattoriali e
            rottamazioni, partite IVA e regime forfettario, 730 e contributi.
            Scegli con chi parlare: la prima analisi è gratuita.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/consulenze" size="lg">
              Richiedi l'analisi gratuita
            </Button>
            {whatsappHref ? (
              <Button href={whatsappHref} variant="secondary" size="lg">
                Scrivici su WhatsApp
              </Button>
            ) : (
              <Button href={phoneHref} variant="secondary" size="lg">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-600" />
                Chiama lo studio
              </Button>
            )}
          </div>

          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {REASSURANCE.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CircleCheck
                  aria-hidden="true"
                  className="h-4 w-4 text-brand-600"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal reveal-delay mx-auto mt-14 max-w-5xl md:mt-16">
          {studio.images.team && (
            <div className="overflow-hidden rounded-4xl bg-slate-100 shadow-elevated ring-1 ring-slate-900/5">
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
            <h2 className="sr-only">Scegli con chi parlare</h2>
            <ul className="grid gap-3 md:grid-cols-3 md:gap-5">
              <Choices />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
