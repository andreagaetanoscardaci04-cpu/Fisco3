import Container from "./Container.jsx";

const BACKGROUNDS = {
  carta: "bg-carta",
  bianco: "bg-bianco",
  inchiostro: "on-dark bg-inchiostro text-carta",
};

export default function Section({
  bg = "carta",
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${BACKGROUNDS[bg]} ${className}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
