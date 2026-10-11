import { studio } from "../config/studio";

// Logotipo testuale: "Fisco" blu + "3" scuro (come il marchio originale)
export default function Logo({ dark = false, className = "" }) {
  const name = studio.brandName.replace(/3$/, "");
  return (
    <span
      className={`text-[1.75rem] font-bold leading-none tracking-tight ${className}`}
    >
      <span className={dark ? "text-white" : "text-brand-600"}>{name}</span>
      <span className={dark ? "text-brand-300" : "text-slate-900"}>3</span>
    </span>
  );
}
