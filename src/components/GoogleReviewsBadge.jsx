import { Star } from "lucide-react";
import { studio } from "../config/studio";

export const hasGoogleRating = Boolean(
  studio.google.rating && studio.google.reviewCount && studio.google.profileUrl,
);

export default function GoogleReviewsBadge() {
  if (!hasGoogleRating) return null;
  const { rating, reviewCount, profileUrl } = studio.google;
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg bg-white px-6 py-4 shadow-card ring-1 ring-pietra transition-colors hover:ring-fisco"
    >
      <span className="text-3xl font-bold text-inchiostro">
        {rating.toLocaleString("it-IT")}
      </span>
      <span>
        <span className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-4 w-4 fill-ocra text-ocra" />
          ))}
        </span>
        <span className="mt-1 block text-sm text-basalto">
          {reviewCount} recensioni su Google
        </span>
      </span>
    </a>
  );
}
