import { Link } from "react-router-dom";
import Section from "../ui/Section.jsx";
import { SERVICES } from "../../data/services.js";

export default function Needs({ bg }) {
  return (
    <Section bg={bg} id="servizi" aria-labelledby="servizi-titolo">
      <h2 id="servizi-titolo" className="text-h2 md:text-h2-lg">
        Di cosa hai bisogno?
      </h2>
      <p className="mt-4 max-w-prose">
        Parti dalla tua situazione: ti risponde il professionista che se ne
        occupa.
      </p>
      <ul className="mt-10 border-b border-pietra">
        {SERVICES.map((s) => (
          <li
            key={s.slug}
            className="grid gap-3 border-t border-pietra py-6 md:grid-cols-12 md:gap-8 md:py-8"
          >
            <h3 className="text-h3 md:col-span-5 md:text-h3-lg">
              {s.situation}
            </h3>
            <div className="md:col-span-7">
              <p className="max-w-prose">{s.description}</p>
              <Link
                to={`/consulenze?tema=${s.slug}`}
                className="link mt-3 inline-block"
              >
                {s.ctaLabel}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
