import ConsulenzaForm from "../components/ConsulenzaForm.jsx";

const PROMISES = [
  "Risposta entro 24/48 ore lavorative",
  "Analisi personalizzata e dettagliata",
  "Riservatezza assoluta garantita",
  "Nessun obbligo di acquisto",
];

export default function Consulenze() {
  return (
    <div className="min-h-screen bg-carta pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-inchiostro">
              Inizia la tua{" "}
              <span className="text-blu">Rivoluzione Fiscale</span>
            </h1>
            <p className="text-xl text-basalto max-w-2xl mx-auto">
              Compila il modulo sottostante per ricevere una prima analisi
              gratuita della tua situazione. Nessun costo nascosto, solo
              competenza.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ConsulenzaForm />
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blu to-blu p-8 rounded-md shadow-xl text-bianco sticky top-32">
                <h3 className="text-xl font-bold mb-4">La nostra promessa</h3>
                <ul className="space-y-3 opacity-90">
                  {PROMISES.map((promise, i) => (
                    <li key={i} className="flex gap-2">
                      <span>✓</span> {promise}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-bianco">
                  <p className="text-sm italic opacity-80">
                    "Il nostro obiettivo è la tua tranquillità. Ogni caso
                    viene analizzato con la massima cura dai nostri tre
                    esperti."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
