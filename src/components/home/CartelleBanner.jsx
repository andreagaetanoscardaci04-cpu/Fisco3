import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import Reveal from "../ui/Reveal.jsx";
import { useInView, inViewAttr } from "../../lib/useInView.js";
import { whatsappHref } from "../../config/studio";

// Tre zone del foglio, dall'alto: y e x sono la posizione del segnaposto
// sul foglio (in percentuale), usate anche per far partire le linee.
// DA VALIDARE CON LO STUDIO
const NOTES = [
  {
    y: "36%",
    x: 0.7,
    title: "Importi, sanzioni e interessi:",
    text: "li verifichiamo voce per voce.",
  },
  {
    y: "66%",
    x: 0.62,
    title: "Data di notifica:",
    text: "è da lì che partono i termini, per questo prima ce la mandi meglio è.",
  },
  {
    y: "90%",
    x: 0.5,
    title: "Le strade possibili:",
    text: "pagamento, rateizzazione, definizione agevolata quando prevista, contestazione se ci sono errori.",
  },
];

const Bar = ({ className = "" }) => (
  <span className={`block h-2 rounded-sm bg-[#D9DBDF] ${className}`} />
);

const Marker = ({ n, className = "" }) => (
  <span
    className={`sheet-marker flex h-7 w-7 items-center justify-center rounded-full bg-ocra font-serif text-[15px] font-semibold text-inchiostro ring-4 ring-ocra/25 ${className}`}
  >
    {n}
  </span>
);

// Cartella esattoriale stilizzata: righe grigie al posto del testo,
// nessun logo e nessun dato reale. Le zone hanno posizioni fisse (in
// percentuale) così segnaposto e linee cadono sempre nel punto giusto.
const Zone = ({ top, height, className = "", children }) => (
  <div
    className={`absolute inset-x-[8%] ${className}`}
    style={{ top, height }}
  >
    {children}
  </div>
);

function Sheet() {
  return (
    <div
      role="img"
      aria-label="Schema di una cartella esattoriale con tre zone evidenziate"
      className="sheet relative aspect-[1/1.36] w-full rounded-sm bg-[#FBFBF8] shadow-elevated"
    >
      <div aria-hidden="true">
        {/* intestazione */}
        <Zone top="6%" height="8%" className="flex items-start justify-between">
          <span className="block aspect-square h-full rounded-sm bg-[#D9DBDF]" />
          <span className="w-2/5 space-y-1.5">
            <Bar />
            <Bar className="w-3/4" />
          </span>
        </Zone>
        <Zone top="18%" height="4%">
          <Bar className="h-2.5 w-3/5 bg-[#B9BCC2]" />
        </Zone>

        {/* 1: tabella degli importi */}
        <Zone
          top="26%"
          height="20%"
          className="flex flex-col justify-between border-y border-[#E3E4E7] py-[3%]"
        >
          {["w-2/5", "w-1/3", "w-1/2"].map((w) => (
            <span key={w} className="flex items-center justify-between gap-4">
              <Bar className={w} />
              <Bar className="w-1/6" />
            </span>
          ))}
          <span className="flex items-center justify-between gap-4">
            <Bar className="w-1/4 bg-[#B9BCC2]" />
            <Bar className="w-1/5 bg-[#9A9DA4]" />
          </span>
        </Zone>
        <Zone top="50%" height="6%" className="space-y-1.5">
          <Bar />
          <Bar className="w-4/5" />
        </Zone>

        {/* 2: relata di notifica */}
        <Zone
          top="60%"
          height="12%"
          className="flex flex-col justify-center gap-2 rounded-sm border border-dashed border-[#C9CBD0] px-[5%]"
        >
          <span className="flex items-center gap-3">
            <Bar className="w-1/3" />
            <span className="block h-4 w-1/4 rounded-sm border border-[#B9BCC2]" />
          </span>
          <Bar className="w-2/3" />
        </Zone>
        <Zone top="76%" height="5%" className="space-y-1.5">
          <Bar className="w-11/12" />
          <Bar className="w-3/5" />
        </Zone>

        {/* 3: modalità di pagamento */}
        <Zone
          top="85%"
          height="10%"
          className="flex gap-2 border-t border-dashed border-[#C9CBD0] pt-[3%]"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block flex-1 rounded-sm bg-[#EDEEF0]" />
          ))}
        </Zone>
      </div>

      {NOTES.map((note, i) => (
        <span
          key={note.title}
          aria-hidden="true"
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: note.y,
            left: `${note.x * 100}%`,
            "--delay": `${700 + i * 300}ms`,
          }}
        >
          <Marker n={i + 1} />
        </span>
      ))}
    </div>
  );
}

export default function CartelleBanner() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      aria-labelledby="cartelle-titolo"
      className="on-dark bg-tonale-scuro py-20 text-su-scuro md:py-28"
    >
      <Container>
        <div className="grid gap-14 xl:grid-cols-12 xl:items-center xl:gap-12">
          <Reveal className="max-w-2xl xl:col-span-4">
            <h2 id="cartelle-titolo" className="section-title text-white">
              Hai ricevuto una cartella esattoriale?
            </h2>
            <p className="mt-5 max-w-md">
              Non ignorarla e non pagarla al buio. Mandaci la cartella: la
              leggiamo con te e ti diciamo quali strade hai.
            </p>
            <div className="mt-9 hidden xl:block">
              <CartelleCta />
            </div>
          </Reveal>

          <div
            ref={ref}
            {...inViewAttr(inView)}
            className="explained lg:pb-12 xl:col-span-8 xl:pb-0 lg:grid lg:grid-cols-[var(--sheet)_1fr] lg:gap-x-[var(--gap)]"
          >
            <div className="mx-auto w-full max-w-[19rem] lg:max-w-none">
              <Sheet />
            </div>

            <ol className="relative mt-10 space-y-5 lg:mt-0 lg:space-y-0">
              {NOTES.map((note, i) => (
                <li
                  key={note.title}
                  className="note flex gap-4 lg:absolute lg:inset-x-0 lg:-translate-y-[14px] lg:gap-0"
                  style={{
                    top: note.y,
                    "--x": note.x,
                    "--delay": `${700 + i * 300}ms`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="note-line absolute right-full top-[14px] hidden h-px bg-ocra lg:block"
                  />
                  <Marker n={i + 1} className="shrink-0 lg:hidden" />
                  <p className="note-text lg:pl-4">
                    <span className="font-medium text-white">{note.title}</span>{" "}
                    {note.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="xl:hidden">
            <CartelleCta />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CartelleCta() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Button to="/consulenze?tema=cartelle" size="lg" className="w-full sm:w-auto">
        Fai analizzare la tua cartella
      </Button>
      {whatsappHref && (
        <a href={whatsappHref} className="link text-white decoration-white/40 hover:text-white">
          Oppure mandaci una foto della cartella su WhatsApp
        </a>
      )}
    </div>
  );
}
