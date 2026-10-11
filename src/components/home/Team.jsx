import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import Section, { SectionHeader } from "../ui/Section.jsx";
import Tag from "../ui/Tag.jsx";
import { namedProfessionals } from "../../config/studio";

function Profile({ p }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-900/5">
      {p.photo && (
        <img
          src={p.photo}
          alt={p.name}
          loading="lazy"
          className="aspect-[4/5] w-full bg-slate-100 object-cover object-top"
        />
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        {p.role && <p className="mt-1 font-medium text-brand-600">{p.role}</p>}
        {p.albo && <p className="mt-1 text-sm text-slate-500">{p.albo}</p>}
        {p.specialties.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.specialties.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        )}
        {p.bio && <p className="mt-4 flex-1 leading-relaxed">{p.bio}</p>}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            to={`/consulenze?prof=${p.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700"
          >
            Parla con {p.name.split(" ")[0]}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          {p.videoUrl && (
            <a
              href={p.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900"
            >
              <PlayCircle aria-hidden="true" className="h-4 w-4" />
              Guarda il video
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
      <SectionHeader
        id="chi-siamo-titolo"
        title="Chi siamo"
        lead="Tre professionisti, tre specialità. Scegli tu con chi parlare."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {namedProfessionals.map((p) => (
          <Profile key={p.slug} p={p} />
        ))}
      </ul>
    </Section>
  );
}
