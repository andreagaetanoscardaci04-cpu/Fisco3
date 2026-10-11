import { Star } from "lucide-react";
import Section, { SectionHeader } from "../ui/Section.jsx";
import GoogleReviewsBadge, {
  hasGoogleRating,
} from "../GoogleReviewsBadge.jsx";
import { studio } from "../../config/studio";

export const hasReviews = hasGoogleRating || studio.reviews.length > 0;

export default function Reviews({ bg }) {
  if (!hasReviews) return null;
  return (
    <Section bg={bg} aria-labelledby="recensioni-titolo">
      <SectionHeader id="recensioni-titolo" title="Cosa dicono i clienti" />
      <div className="mt-8 flex justify-center">
        <GoogleReviewsBadge />
      </div>
      {studio.reviews.length > 0 && (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studio.reviews.map((r) => (
            <li key={r.author + r.date}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5">
                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`Valutazione ${r.rating} su 5`}
                >
                  {Array.from({ length: r.rating }, (_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-slate-900">
                    {r.author}
                  </span>
                  <span className="text-slate-500"> · {r.date}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
