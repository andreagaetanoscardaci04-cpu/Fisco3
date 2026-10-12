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


const SPECIALTY_ICONS = {
  cartelle: ShieldCheck,
  forfettario: Briefcase,
  730: FileText,
};

// Una scheda per specialità (o per professionista, quando ci sono i dati)
function ChoiceCard({ to, icon: Icon, photo, title, subtitle, cta }) {
  return (
    <Link
      to={to}
      className="group flex h-full items-center gap-4 rounded-lg bg-white p-5 shadow-card ring-1 ring-pietra transition-colors duration-200 hover:ring-fisco md:p-6"
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          className="h-16 w-16 shrink-0 rounded-lg bg-pietra object-cover object-top"
        />
      ) : (
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-fisco-tenue transition-colors text-inchiostro group-hover:bg-inchiostro group-hover:text-white">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
      )}
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-semibold leading-snug text-inchiostro">
          {title}
        </span>
        {subtitle && (
          <span className="mt-0.5 block text-sm">
            {subtitle}
          </span>
        )}
        <span className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-fisco">
          {cta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
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
  return SPECIALTIES.map((sp) => (
    <li key={sp.slug}>
      <ChoiceCard
        to={`/consulenze?tema=${sp.slug}`}
        icon={SPECIALTY_ICONS[sp.slug]}
        title={sp.label}
        cta="Parla con lo specialista"
      />
    </li>
  ));
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-tonale-chiaro pb-16 pt-14 md:pb-24 md:pt-20">
      <Container className="relative">
        <div className="reveal mx-auto max-w-5xl text-center">
          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tightest sm:text-6xl lg:text-[4.25rem]">
            <span className="sm:block">Commercialisti a Catania.</span>{" "}
            <span className="block">
              Il&nbsp;team lo scegli tu.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
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
                <Phone aria-hidden="true" className="h-4 w-4 text-fisco" />
                Chiama lo studio
              </Button>
            )}
          </div>

          <p className="mt-5 text-[15px]">
            Ti ricontattiamo entro {studio.responseTime}.
          </p>
        </div>

        <div className="reveal reveal-delay mx-auto mt-14 max-w-5xl md:mt-16">
          {studio.images.team && (
            <div className="overflow-hidden rounded-lg bg-pietra shadow-elevated ring-1 ring-inchiostro/5">
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
