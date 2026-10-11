import Container from "./Container.jsx";
import { TEMA_SITO, isNuovaPalette } from "../../config/tema.js";

const BACKGROUNDS = {
  white: "bg-white",
  tint: "bg-slate-50",
  brand: "on-dark bg-brand-600 text-brand-50",
  navy: "on-dark bg-navy-900 text-slate-300",
};

// Ruoli del ritmo delle sezioni (src/config/tema.js), per palette
const ROLES = {
  attuale: { carta: "bg-white", pietra: "bg-slate-50" },
  nuova: {
    carta: "bg-carta",
    pietra: "bg-pietra",
    scuro: "on-dark bg-tonale-scuro text-su-scuro",
  },
};

export const sectionBg = (bg, tema = TEMA_SITO) =>
  (isNuovaPalette(tema) ? ROLES.nuova : ROLES.attuale)[bg] ?? BACKGROUNDS[bg];

export default function Section({
  bg = "white",
  tema = TEMA_SITO,
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${sectionBg(bg, tema)} ${className}`}
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
