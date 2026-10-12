import { studio } from "../config/studio";

// Logotipo testuale: "Fisco" blu + "3" inchiostro (come il marchio originale)
export default function Logo({ dark = false, className = "" }) {
  const name = studio.brandName.replace(/3$/, "");
  return (
    <span
      className={`font-serif text-[1.75rem] font-semibold lining-nums leading-none tracking-tight ${className}`}
    >
      <span className={dark ? "text-white" : "text-fisco"}>{name}</span>
      <span className={dark ? "text-fisco-chiaro" : "text-inchiostro"}>3</span>
    </span>
  );
}
