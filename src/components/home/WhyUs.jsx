import Section from "../ui/Section.jsx";
import { useInView, inViewAttr } from "../../lib/useInView.js";
import { studio } from "../../config/studio";

// Tre principi, scritti come affermazioni. Il percorso (analisi, proposta,
// scadenze) è già in "Come funziona": qui non si ripete.
const PRINCIPLES = [
  {
    title: "Sai sempre con chi parli.",
    text: "Ogni pratica la segue un professionista con nome e cognome, dall'inizio alla fine.",
  },
  {
    title: "Il prezzo lo conosci prima.",
    text: "Dopo l'analisi gratuita ricevi una proposta chiara, senza costi a sorpresa.",
  },
  {
    title: "Ti spieghiamo tutto.",
    text: "Niente linguaggio tecnico incomprensibile: sai cosa succede e perché.",
  },
];

// La maschera ha il colore dello sfondo della sezione
const MASK_BG = { carta: "#F6F7F5", pietra: "#E6E3DC" };

export default function WhyUs({ bg }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { office, officeSmall } = studio.images;

  return (
    <Section bg={bg} aria-labelledby="perche-titolo">
      <div
        ref={ref}
        {...inViewAttr(inView)}
        className={`grid items-center gap-12 lg:gap-16 ${
          office ? "lg:grid-cols-[55fr_45fr]" : ""
        }`}
      >
        {office && (
          <div
            className="photo-mask relative overflow-hidden rounded-lg bg-pietra"
            style={{ "--mask-bg": MASK_BG[bg] }}
          >
            <img
              src={office}
              srcSet={officeSmall ? `${officeSmall} 768w, ${office} 1536w` : undefined}
              sizes="(min-width: 1024px) 660px, 100vw"
              alt={`Il team di ${studio.brandName} in studio`}
              width="1536"
              height="1024"
              loading="lazy"
              className="aspect-[3/2] w-full object-cover lg:aspect-[4/3.4]"
            />
          </div>
        )}

        <div className={office ? "" : "max-w-2xl"}>
          <h2 id="perche-titolo" className="section-title fade-rise">
            Perché scegliere {studio.brandName}
          </h2>
          <ul className="mt-8 border-b border-pietra">
            {PRINCIPLES.map(({ title, text }, i) => (
              <li
                key={title}
                className="fade-rise border-t border-pietra py-6"
                style={{ "--delay": `${250 + i * 150}ms` }}
              >
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 max-w-md">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
