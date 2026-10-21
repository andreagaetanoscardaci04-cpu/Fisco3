import Container from "./Container.jsx";

// Intestazione delle pagine interne: etichetta, titolo, testo
export default function PageHero({ eyebrow, icon: Icon, title, highlight, lead, children }) {
  return (
    <section className="bg-tonale-chiaro pb-12 pt-14 md:pb-16 md:pt-20">
      <Container className="reveal text-center">
        {eyebrow && (
          <p className="eyebrow">
            {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          {title}
          {highlight && ` ${highlight}`}
        </h1>
        {lead && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
            {lead}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
