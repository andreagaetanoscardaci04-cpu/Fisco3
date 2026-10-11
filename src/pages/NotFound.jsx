import Button from "../components/ui/Button.jsx";
import Section from "../components/ui/Section.jsx";

export default function NotFound() {
  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl">Pagina non trovata</h1>
        <p className="mt-5 text-lg md:text-xl">
          L'indirizzo che hai aperto non esiste o è stato spostato.
        </p>
        <Button to="/" variant="secondary" className="mt-8">
          Torna alla homepage
        </Button>
      </div>
    </Section>
  );
}
