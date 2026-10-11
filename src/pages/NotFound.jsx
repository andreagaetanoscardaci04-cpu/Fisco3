import Button from "../components/ui/Button.jsx";
import PageHero from "../components/ui/PageHero.jsx";

export default function NotFound() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        eyebrow="Errore 404"
        title="Pagina"
        highlight="non trovata"
        lead="L'indirizzo che hai aperto non esiste o è stato spostato."
      >
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Torna alla homepage</Button>
          <Button to="/consulenze" variant="secondary">
            Richiedi l'analisi gratuita
          </Button>
        </div>
      </PageHero>
    </div>
  );
}
