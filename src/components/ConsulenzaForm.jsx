import { useState } from "react";
import { CircleCheckBig, LoaderCircle, Send } from "lucide-react";
import { studio } from "../config/studio";

const WEB3FORMS_ACCESS_KEY = "42a317e3-dcef-4a16-abd3-7e30c6373cd0";

export default function ConsulenzaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
        setSubmitted(true);
      } else {
        setError("Errore durante l'invio. Riprova.");
      }
    } catch {
      setError("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-bianco p-12 rounded-md shadow-2xl text-center space-y-6">
        <div className="flex justify-center">
          <CircleCheckBig className="w-20 h-20 text-conferma" />
        </div>
        <h2 className="text-3xl font-bold text-inchiostro">
          Richiesta Inviata!
        </h2>
        <p className="text-lg text-basalto max-w-md mx-auto">
          Ti contatteremo entro {studio.responseTime} per l'analisi gratuita
          della tua situazione.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blu font-bold hover:underline"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bianco p-8 md:p-12 rounded-md shadow-2xl space-y-6 border border-pietra"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-basalto ml-1">
            Nome Completo
          </label>
          <input
            type="text"
            name="nome"
            required
            placeholder="Es. Mario Rossi"
            className="w-full px-6 py-4 rounded-md bg-carta border border-transparent focus:border-blu focus:bg-bianco outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-basalto ml-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="mario@esempio.it"
            className="w-full px-6 py-4 rounded-md bg-carta border border-transparent focus:border-blu focus:bg-bianco outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-basalto ml-1">
            Telefono
          </label>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="+39 000 0000000"
            className="w-full px-6 py-4 rounded-md bg-carta border border-transparent focus:border-blu focus:bg-bianco outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-basalto ml-1">
            Tipo di Quesito
          </label>
          <select
            name="tipo_quesito"
            className="w-full px-6 py-4 rounded-md bg-carta border border-transparent focus:border-blu focus:bg-bianco outline-none transition-all appearance-none cursor-pointer"
          >
            <option>Cartelle Esattoriali / Rottamazione</option>
            <option>Regime Forfettario</option>
            <option>Modello 730 / Rimborsi</option>
            <option>Resto al Sud / Finanziamenti</option>
            <option>Altro</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-basalto ml-1">
          Messaggio (Opzionale)
        </label>
        <textarea
          rows={4}
          name="messaggio"
          placeholder="Raccontaci brevemente di cosa hai bisogno..."
          className="w-full px-6 py-4 rounded-md bg-carta border border-transparent focus:border-blu focus:bg-bianco outline-none transition-all resize-none"
        />
      </div>

      {error && (
        <p className="text-errore text-center font-medium">{error}</p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blu text-bianco py-5 rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-carta hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? (
            <>
              Invio in corso... <LoaderCircle size={20} className="animate-spin" />
            </>
          ) : (
            <>
              Richiedi Analisi Gratuita <Send size={20} />
            </>
          )}
        </button>
        <p className="text-center text-xs text-basalto-tenue mt-4">
          I tuoi dati sono al sicuro. Ai sensi del GDPR, garantiamo la massima
          riservatezza.
        </p>
      </div>
    </form>
  );
}
