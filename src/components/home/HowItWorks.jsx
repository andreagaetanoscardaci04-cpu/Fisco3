import Reveal from "../ui/Reveal.jsx";
import Section from "../ui/Section.jsx";
import { useInView, inViewAttr } from "../../lib/useInView.js";
import { studio } from "../../config/studio";

const STEPS = [
  {
    when: "Oggi",
    title: "Richiedi l'analisi",
    text: "Compili il modulo o chiami lo studio.",
  },
  {
    when: `Entro ${studio.responseTime}`,
    title: "Parli con lo specialista",
    text: "Ti ricontattiamo e parli con chi segue il tuo caso.",
  },
  {
    when: "Dopo l'analisi",
    title: "Ricevi una proposta",
    text: "Cosa fare e quanto costa, prima di iniziare. Decidi tu.",
  },
  {
    when: "Durante l'anno",
    title: "Ti avvisiamo per tempo",
    text: "Scadenze e versamenti, sempre con lo stesso professionista.",
  },
];

// La linea si riempie a velocità costante e il punto i si accende quando la
// linea lo raggiunge. Desktop: una linea unica in 700ms. Mobile: un tratto
// da 300ms tra un punto e il successivo.
const FILL_MS = 700;
const SEGMENT_MS = 300;
const delays = (i) => ({
  "--delay": `${SEGMENT_MS * i}ms`,
  "--delay-lg": `${Math.round((FILL_MS * i) / (STEPS.length - 1))}ms`,
});

export default function HowItWorks({ bg }) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <Section bg={bg} aria-labelledby="come-funziona-titolo">
      <Reveal className="max-w-2xl">
        <h2 id="come-funziona-titolo" className="section-title">
          Come funziona
        </h2>
        <p className="section-lead text-pretty">
          Dal primo contatto alla gestione di tutto l'anno, in quattro
          passaggi.
        </p>
      </Reveal>

      <div ref={ref} {...inViewAttr(inView)} className="timeline relative mt-14 lg:mt-20">
        {/* desktop: linea orizzontale dal primo all'ultimo punto */}
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[47.5px] hidden h-px bg-pietra-scura lg:block"
        >
          <span className="timeline-fill absolute inset-0 bg-fisco" />
        </span>

        <ol className="relative space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative pl-10 lg:pl-0 lg:text-center"
              style={delays(i)}
            >
              {/* mobile: un tratto verticale fino al punto successivo */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[7.5px] top-3 h-[calc(100%+2.5rem)] w-px bg-pietra-scura lg:hidden"
                >
                  <span
                    className="timeline-fill absolute inset-0 bg-fisco"
                    style={{ "--segment": `${SEGMENT_MS}ms` }}
                  />
                </span>
              )}
              <p className="whitespace-nowrap text-[15px] font-medium text-basalto">
                {step.when}
              </p>
              <span
                aria-hidden="true"
                className="absolute left-0 top-[4px] block h-4 w-4 rounded-full border-2 border-pietra-scura bg-carta lg:relative lg:top-auto lg:mx-auto lg:mt-4"
              >
                <span className="timeline-dot absolute -inset-[2px] rounded-full bg-fisco" />
              </span>
              <p
                aria-hidden="true"
                className="mt-3 font-serif text-[2.5rem] font-semibold leading-none text-ocra lg:mt-6"
              >
                {i + 1}
              </p>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
