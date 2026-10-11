import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import {
  studio,
  heroProfessionals,
  phoneHref,
  whatsappHref,
} from "../../config/studio";
import { SPECIALTIES } from "../../data/services.js";

function ProfessionalCard({ professional }) {
  return (
    <li className="flex flex-col">
      <img
        src={professional.photo}
        alt={`${professional.name}, ${professional.role ?? "commercialista"}`}
        className="aspect-[3/4] w-full rounded-md bg-pietra object-cover"
      />
      <h2 className="mt-4 text-h3">{professional.name}</h2>
      {professional.specialties[0] && (
        <p className="mt-1 text-small text-basalto-tenue">
          {professional.specialties[0]}
        </p>
      )}
      <Link
        to={`/consulenze?prof=${professional.slug}`}
        className="link mt-3 text-small"
      >
        Parla con {professional.name}
      </Link>
    </li>
  );
}

// Mostrato finché i tre professionisti non hanno nome e foto in studio.ts
function SpecialtiesPanel() {
  return (
    <div className="rounded-md border border-pietra bg-bianco">
      <div className="px-6 pb-4 pt-6 md:px-8 md:pt-8">
        <h2 className="text-h3 md:text-h3-lg">Scegli con chi parlare</h2>
        <p className="mt-2 text-basalto-tenue">
          Ogni specialità ha il suo professionista di riferimento.
        </p>
      </div>
      <ul>
        {SPECIALTIES.map((s) => (
          <li key={s.slug} className="border-t border-pietra">
            <Link
              to={`/consulenze?tema=${s.slug}`}
              className="group flex items-center gap-4 px-6 py-5 hover:bg-carta md:px-8"
            >
              <span className="flex-1 font-medium text-inchiostro">
                {s.label}
              </span>
              <ChevronRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-basalto-tenue group-hover:text-blu"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t border-pietra px-6 py-5 text-small md:px-8">
        <p>
          Preferisci telefonare?{" "}
          <a href={phoneHref} className="link">
            {studio.phone}
          </a>
        </p>
      </div>
    </div>
  );
}

// Riga compatta per mobile: foto tonda, nome, specialità, freccia
function ProfessionalRow({ professional }) {
  return (
    <li className="border-t border-pietra first:border-t-0">
      <Link
        to={`/consulenze?prof=${professional.slug}`}
        className="group flex items-center gap-4 px-4 py-3 hover:bg-carta"
      >
        <img
          src={professional.photo}
          alt=""
          className="h-14 w-14 shrink-0 rounded-full bg-pietra object-cover"
        />
        <span className="flex-1">
          <span className="block font-medium text-inchiostro">
            {professional.name}
          </span>
          {professional.specialties[0] && (
            <span className="block text-small text-basalto-tenue">
              {professional.specialties[0]}
            </span>
          )}
        </span>
        <ChevronRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-basalto-tenue group-hover:text-blu"
        />
      </Link>
    </li>
  );
}

export default function Hero() {
  const hasPeople = heroProfessionals.length > 0;
  const textCols = hasPeople ? "lg:col-span-5" : "lg:col-span-6";
  const peopleCols = hasPeople
    ? "lg:col-span-7 lg:col-start-6"
    : "lg:col-span-6 lg:col-start-7";

  return (
    <section className="bg-carta pb-12 pt-10 md:pb-24 md:pt-20">
      <Container className="reveal grid items-start gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
        <div className={`${textCols} lg:row-start-1 lg:pt-4`}>
          <h1 className="text-balance text-display md:text-display-lg">
            Commercialisti a Catania. Il&nbsp;team lo scegli tu.
          </h1>
          <p className="mt-5 max-w-prose text-pretty text-lead md:mt-6 md:text-lead-lg">
            Tre professionisti, tre specialità: cartelle esattoriali e
            rottamazioni, partite IVA e regime forfettario, 730 e contributi.
            Scegli con chi parlare: la prima analisi è gratuita.
          </p>
        </div>

        <div className={`${peopleCols} lg:row-span-2 lg:row-start-1`}>
          {hasPeople ? (
            <>
              <ul className="rounded-md border border-pietra bg-bianco lg:hidden">
                {heroProfessionals.map((p) => (
                  <ProfessionalRow key={p.slug} professional={p} />
                ))}
              </ul>
              <ul className="hidden grid-cols-3 gap-6 lg:grid">
                {heroProfessionals.map((p) => (
                  <ProfessionalCard key={p.slug} professional={p} />
                ))}
              </ul>
            </>
          ) : (
            <SpecialtiesPanel />
          )}
        </div>

        <div
          className={`${textCols} flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:row-start-2 lg:mt-8`}
        >
          <Button to="/consulenze">Richiedi l'analisi gratuita</Button>
          {whatsappHref && (
            <Button href={whatsappHref} variant="secondary">
              Scrivici su WhatsApp
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
