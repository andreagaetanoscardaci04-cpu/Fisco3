import { Link } from "react-router-dom";
import { TEMA_SITO, isNuovaPalette } from "../../config/tema.js";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold leading-tight transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const SIZES = {
  md: "min-h-12 px-6 py-3 text-[15px]",
  lg: "min-h-14 px-8 py-4 text-base",
};

const VARIANTS = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700",
  secondary:
    "bg-white text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:ring-slate-300",
  ghost: "text-brand-600 hover:bg-brand-50",
  // per sfondi blu o scuri
  inverse: "bg-white text-brand-700 shadow-elevated hover:bg-brand-50",
  "outline-light":
    "text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 hover:ring-white/70",
};

// Nuova palette: il blu Fisco3 resta solo su pulsanti, link e focus
const VARIANTS_NUOVA = {
  ...VARIANTS,
  primary: "bg-fisco text-white hover:bg-fisco-hover",
  secondary:
    "bg-white text-inchiostro ring-1 ring-inset ring-pietra hover:bg-carta hover:ring-[#CFCBC1]",
  ghost: "text-fisco hover:bg-fisco-tenue",
  inverse: "bg-white text-inchiostro hover:bg-carta",
};

export default function Button({
  tema = TEMA_SITO,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const variants = isNuovaPalette(tema) ? VARIANTS_NUOVA : VARIANTS;
  const classes = `${BASE} ${SIZES[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
