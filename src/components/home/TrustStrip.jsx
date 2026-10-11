import { Star } from "lucide-react";
import Container from "../ui/Container.jsx";
import { studio, hasAlbo, yearsActive } from "../../config/studio";

export default function TrustStrip() {
  const { rating, reviewCount, profileUrl } = studio.google;

  const items = [
    rating && reviewCount && profileUrl && (
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-blu"
      >
        <Star aria-hidden="true" className="h-4 w-4 fill-inchiostro text-inchiostro" />
        {rating.toLocaleString("it-IT")} su Google · {reviewCount} recensioni
      </a>
    ),
    hasAlbo && "Iscritti all'Albo dei Dottori Commercialisti",
    yearsActive &&
      `Dal ${studio.foundedYear}, ${yearsActive} anni di attività`,
    studio.address.short,
  ].filter(Boolean);

  return (
    <div className="border-y border-pietra bg-bianco">
      <Container>
        <ul className="flex flex-col divide-y divide-pietra text-small text-inchiostro md:flex-row md:flex-wrap md:divide-x md:divide-y-0">
          {items.map((item, i) => (
            <li key={i} className="py-3 md:px-6 md:py-4 md:first:pl-0">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
