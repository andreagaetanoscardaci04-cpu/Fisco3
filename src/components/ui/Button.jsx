import { Link } from "react-router-dom";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-center font-medium leading-tight transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS = {
  primary: "bg-blu text-bianco hover:bg-blu-scuro",
  secondary:
    "border border-pietra-scura bg-bianco text-inchiostro hover:border-inchiostro hover:bg-carta",
  ghost: "text-blu underline underline-offset-4 hover:text-blu-scuro",
  // per le sezioni su sfondo Inchiostro (il blu lì non ha contrasto sufficiente)
  inverse: "bg-bianco text-inchiostro hover:bg-pietra",
};

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

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
