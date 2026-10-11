import Container from "./Container.jsx";

const BACKGROUNDS = {
  white: "bg-white",
  tint: "bg-slate-50",
  brand: "on-dark bg-brand-600 text-brand-50",
  navy: "on-dark bg-navy-900 text-slate-300",
};

export default function Section({
  bg = "white",
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
