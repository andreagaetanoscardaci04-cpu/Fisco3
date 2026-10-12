import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium leading-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const SIZES = {
  md: "min-h-12 px-6 py-3 text-[15px]",
  lg: "min-h-14 px-8 py-4 text-base",
};

// Il blu Fisco3 si usa solo per pulsanti, link e focus
const VARIANTS = {
  primary: "bg-fisco text-white hover:bg-fisco-hover",
  secondary:
    "bg-white text-inchiostro ring-1 ring-inset ring-pietra-scura hover:bg-carta hover:ring-grafite",
  ghost: "text-fisco hover:bg-fisco-tenue",
  // per sfondi scuri
  inverse: "bg-white text-inchiostro hover:bg-carta",
  "outline-light":
    "text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 hover:ring-white/70",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

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
