import { ShieldCheck, PiggyBank, FileText, TrendingUp } from "lucide-react";

export const SERVICES = [
  {
    title: "Rottamazione 5",
    description:
      "Gestione completa delle cartelle esattoriali e piani di rientro agevolati.",
    icon: <ShieldCheck className="w-8 h-8 text-blu" />,
  },
  {
    title: "Regime Forfettario",
    description:
      "Ottimizzazione fiscale per professionisti: paga meno tasse legalmente.",
    icon: <PiggyBank className="w-8 h-8 text-blu" />,
  },
  {
    title: "Modelli 730",
    description:
      "Assistenza per rimborsi fiscali veloci e sicuri sul tuo stipendio.",
    icon: <FileText className="w-8 h-8 text-blu" />,
  },
  {
    title: "Resto al Sud",
    description:
      "Accesso a contributi a fondo perduto per nuove attività nel Mezzogiorno.",
    icon: <TrendingUp className="w-8 h-8 text-blu" />,
  },
];
