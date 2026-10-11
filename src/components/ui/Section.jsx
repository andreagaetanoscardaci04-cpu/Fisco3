import Container from "./Container.jsx";

// Ritmo delle sezioni, dall'alto: hero (gradiente chiaro), Carta, Pietra,
// sezione scura, Carta, Pietra, ..., CTA finale e footer (gradiente scuro).
// Due sezioni scure non sono mai adiacenti, tranne CTA finale e footer,
// separati da un bordo.
const BACKGROUNDS = {
  carta: "bg-carta",
  pietra: "bg-pietra",
  scuro: "on-dark bg-tonale-scuro text-su-scuro",
};

export const RITMO_CHIARO = ["carta", "pietra"];

export default function Section({
  bg = "carta",
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${BACKGROUNDS[bg]} ${className}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

// Intestazione di sezione centrata (titolo + sottotitolo)
export function SectionHeader({ id, title, lead, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 id={id} className="section-title text-balance">
        {title}
      </h2>
      {lead && <p className="section-lead text-pretty">{lead}</p>}
    </div>
  );
}
