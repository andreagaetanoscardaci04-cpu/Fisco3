import { Star } from "lucide-react";
import { studio } from "../config/studio";

export const hasGoogleRating = Boolean(
  studio.google.rating && studio.google.reviewCount && studio.google.profileUrl,
);

export default function GoogleReviewsBadge() {
  if (!hasGoogleRating) return null;
  const { rating, reviewCount, profileUrl } = studio.google;
  return (
    <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-pietra bg-bianco px-5 py-4">
      <span className="inline-flex items-center gap-2 font-serif text-h3 font-semibold text-inchiostro">
        <Star aria-hidden="true" className="h-5 w-5 fill-inchiostro" />
        {rating.toLocaleString("it-IT")}
      </span>
      <span>su Google, {reviewCount} recensioni</span>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Leggi le recensioni su Google
      </a>
    </div>
  );
}
