import Button from "../components/ui/Button.jsx";
import Section from "../components/ui/Section.jsx";

export default function NotFound() {
  return (
    <Section bg="carta" className="!pt-10 md:!pt-16">
      <div className="max-w-prose">
        <h1 className="text-display md:text-display-lg">Pagina non trovata</h1>
        <p className="mt-5 text-lead md:text-lead-lg">
          L'indirizzo che hai aperto non esiste o è stato spostato.
        </p>
        <Button to="/" variant="secondary" className="mt-8">
          Torna alla homepage
        </Button>
      </div>
    </Section>
  );
}
