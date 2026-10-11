import { BadgeCheck, Star } from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Hero from "../components/home/Hero.jsx";
import CartelleBanner from "../components/home/CartelleBanner.jsx";

// Pagina interna (noindex, fuori dalla sitemap) per scegliere la palette.
// Da rimuovere dopo la scelta.
const VARIANTI = [
  { tema: "A", nota: "Palette attuale" },
  { tema: "B", nota: "Nuova palette con gradienti tonali, senza ocra" },
  { tema: "C", nota: "Nuova palette con gradienti tonali e ocra" },
];

// Gli altri elementi in ocra non compaiono in hero e cartelle (stelle e
// Albo sono nascosti finché i dati sono null): qui un esempio, con dati finti.
function EsempioOcra() {
  return (
    <div className="border-t border-pietra bg-carta py-10">
      <Container>
        <p className="text-sm font-semibold text-basalto">
          Altri elementi in ocra (esempio con dati non reali)
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5 text-[15px] font-medium text-basalto">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-ocra text-ocra" />
              ))}
            </span>
            4,9 su Google
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck aria-hidden="true" className="h-5 w-5 text-ocra" />
            Iscritti all'Albo dei Dottori Commercialisti
          </span>
          <span className="inline-flex items-center gap-3">
            {[1, 2, 3, 4].map((n) => (
              <span
                key={n}
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-ocra font-bold text-inchiostro"
              >
                {n}
              </span>
            ))}
            Numeri di "Come funziona"
          </span>
        </div>
      </Container>
    </div>
  );
}

export default function AnteprimaColori() {
  return (
    <>
      <Container className="py-10">
        <h1 className="text-3xl font-bold">Anteprima colori</h1>
        <p className="mt-2">
          Hero e sezione cartelle in tre varianti. Pagina non indicizzata.
        </p>
      </Container>

      {VARIANTI.map(({ tema, nota }) => (
        <section
          key={tema}
          aria-labelledby={`variante-${tema}`}
          className="border-t-4 border-slate-900"
        >
          <Container className="py-6">
            <h2 id={`variante-${tema}`} className="text-2xl font-bold">
              Variante {tema}
            </h2>
            <p className="mt-1 text-[15px]">{nota}</p>
          </Container>
          <Hero tema={tema} titleAs="h3" subtitleAs="h4" />
          <CartelleBanner
            tema={tema}
            idSuffix={`-${tema}`}
            titleAs="h3"
            ariaLabel={`Sezione cartelle, variante ${tema}`}
          />
          {tema === "C" && <EsempioOcra />}
        </section>
      ))}
    </>
  );
}
