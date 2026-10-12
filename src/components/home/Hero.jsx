import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import {
  studio,
  heroProfessionals,
  phoneHref,
  whatsappHref,
} from "../../config/studio";
import { SPECIALTIES } from "../../data/services.js";

// Posizione di ogni cartellina. Desktop: sfalsate sul bordo inferiore della
// foto (la prima più in alto, la seconda più in basso, la terza a metà).
// Mobile: un piccolo mazzo di pratiche con le linguette scalate.
const STAGGER = [
  { item: "", tab: "ml-3" },
  { item: "md:mt-14", tab: "ml-[22%] md:ml-3" },
  { item: "md:mt-7", tab: "ml-[40%] md:ml-3" },
];

// Una cartellina di pratica: linguetta con il nome, una riga concreta e il link
function Folder({ to, tab, summary, photo, cta, index }) {
  return (
    <li
      className={`folder-in relative ${index > 0 ? "-mt-3 md:mt-0" : ""} ${STAGGER[index].item}`}
      style={{ "--delay": `${200 + index * 100}ms`, zIndex: index + 1 }}
    >
      <Link
        to={to}
        className="group block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:-translate-y-1"
      >
        <h3
          className={`folder-tab relative inline-block max-w-[60%] bg-pietra py-2 pl-4 pr-8 text-base leading-tight text-inchiostro transition-colors duration-200 group-hover:bg-fisco group-hover:text-white group-focus-visible:bg-fisco group-focus-visible:text-white md:max-w-none ${STAGGER[index].tab}`}
        >
          {tab}
        </h3>
        <span className="flex items-center gap-4 rounded-lg border-t-4 border-pietra bg-white px-5 pb-6 pt-4 shadow-card ring-1 ring-pietra transition-colors duration-200 group-hover:border-fisco group-focus-visible:border-fisco md:px-6">
          {photo && (
            <img
              src={photo}
              alt=""
              className="h-14 w-14 shrink-0 rounded-lg bg-pietra object-cover object-top"
            />
          )}
          <span className="min-w-0">
            <span className="block text-base leading-snug text-basalto">
              {summary}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[15px] font-medium text-fisco">
              {cta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}

function Folders() {
  if (heroProfessionals.length > 0) {
    return heroProfessionals.map((p, i) => (
      <Folder
        key={p.slug}
        index={i}
        to={`/consulenze?prof=${p.slug}`}
        photo={p.photo}
        tab={p.name}
        summary={p.specialties[0]}
        cta={`Parla con ${p.name.split(" ")[0]}`}
      />
    ));
  }
  return SPECIALTIES.map((sp, i) => (
    <Folder
      key={sp.slug}
      index={i}
      to={`/consulenze?tema=${sp.slug}`}
      tab={sp.tab}
      summary={sp.summary}
      cta="Parla con lo specialista"
    />
  ));
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-tonale-chiaro pb-16 pt-14 md:pb-24 md:pt-20">
      <Container className="relative">
        <div className="reveal mx-auto max-w-4xl text-center">
          <h1 className="heading-display">
            <span className="sm:block">Commercialisti a Catania.</span>{" "}
            <span className="block">Il&nbsp;team lo scegli tu.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg md:text-xl md:leading-[1.6]">
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

        <div className="mx-auto mt-14 flex max-w-5xl flex-col md:mt-16">
          {studio.images.team && (
            <div className="reveal reveal-delay order-2 mt-8 overflow-hidden rounded-lg bg-pietra shadow-elevated ring-1 ring-inchiostro/5 md:order-1 md:mt-0">
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
            className={`relative order-1 md:order-2 md:px-6 ${
              studio.images.team ? "md:-mt-20 lg:-mt-24" : ""
            }`}
          >
            <h2 className="sr-only">Scegli con chi parlare</h2>
            <ul className="grid items-start md:grid-cols-3 md:gap-5">
              <Folders />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
