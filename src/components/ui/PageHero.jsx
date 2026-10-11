import Container from "./Container.jsx";

// Intestazione delle pagine interne: etichetta, titolo (con parte blu), testo
export default function PageHero({ eyebrow, icon: Icon, title, highlight, lead, children }) {
  return (
    <section className="bg-brand-50/60 pb-12 pt-14 md:pb-16 md:pt-20">
      <Container className="reveal text-center">
        {eyebrow && (
          <p className="eyebrow">
            {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tightest text-slate-900 md:text-6xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-brand-600">{highlight}</span>
            </>
          )}
        </h1>
        {lead && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 md:text-xl">
            {lead}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
