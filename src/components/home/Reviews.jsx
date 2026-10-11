import Section from "../ui/Section.jsx";
import GoogleReviewsBadge, {
  hasGoogleRating,
} from "../GoogleReviewsBadge.jsx";
import { studio } from "../../config/studio";

export const hasReviews = hasGoogleRating || studio.reviews.length > 0;

export default function Reviews({ bg }) {
  if (!hasReviews) return null;
  return (
    <Section bg={bg} aria-labelledby="recensioni-titolo">
      <h2 id="recensioni-titolo" className="text-h2 md:text-h2-lg">
        Cosa dicono i clienti
      </h2>
      <div className="mt-8">
        <GoogleReviewsBadge />
      </div>
      {studio.reviews.length > 0 && (
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studio.reviews.map((r) => (
            <li key={r.author + r.date}>
              <figure className="h-full rounded-md border border-pietra bg-bianco p-6">
                <p className="sr-only">Valutazione {r.rating} su 5</p>
                <blockquote>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className="mt-4 text-small text-basalto-tenue">
                  {r.author}, {r.date}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
