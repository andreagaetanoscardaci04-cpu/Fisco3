import { Link } from "react-router-dom";
import Section from "../ui/Section.jsx";
import Tag from "../ui/Tag.jsx";
import { namedProfessionals } from "../../config/studio";

function Profile({ p }) {
  return (
    <li className="grid gap-6 border-t border-pietra py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10">
      {p.photo && (
        <img
          src={p.photo}
          alt={p.name}
          loading="lazy"
          className="aspect-[3/4] w-full max-w-xs rounded-md bg-pietra object-cover md:col-span-4"
        />
      )}
      <div className={p.photo ? "md:col-span-8" : "md:col-span-12"}>
        <h3 className="text-h3 md:text-h3-lg">{p.name}</h3>
        {p.role && (
          <p className="mt-1 font-medium text-inchiostro">{p.role}</p>
        )}
        {p.albo && (
          <p className="mt-1 text-small text-basalto-tenue">{p.albo}</p>
        )}
        {p.specialties.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.specialties.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        )}
        {p.bio && <p className="mt-4 max-w-prose">{p.bio}</p>}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <Link to={`/consulenze?prof=${p.slug}`} className="link">
            Parla con {p.name}
          </Link>
          {p.videoUrl && (
            <a
              href={p.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Guarda il video di presentazione
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export const hasTeam = namedProfessionals.length > 0;

export default function Team({ bg }) {
  if (!hasTeam) return null;
  return (
    <Section bg={bg} id="chi-siamo" aria-labelledby="chi-siamo-titolo">
      <h2 id="chi-siamo-titolo" className="text-h2 md:text-h2-lg">
        Chi siamo
      </h2>
      <ul className="mt-10">
        {namedProfessionals.map((p) => (
          <Profile key={p.slug} p={p} />
        ))}
      </ul>
    </Section>
  );
}
