import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CircleCheckBig, LoaderCircle, Send } from "lucide-react";
import Button from "./ui/Button.jsx";
import { studio, namedProfessionals, phoneHref } from "../config/studio";
import { SERVICES, OTHER_TOPIC, findService } from "../data/services.js";
import { hasMarketingConsent } from "../lib/consent.js";
import { getSourcePage } from "../lib/navigation.js";

const WEB3FORMS_ACCESS_KEY = "42a317e3-dcef-4a16-abd3-7e30c6373cd0";
const NO_PREFERENCE = "Nessuna preferenza";

const INPUT =
  "w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-slate-900 transition-colors placeholder:text-slate-400 hover:border-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-100";
const borderFor = (error) =>
  error ? "border-red-500 bg-red-50/40" : "border-slate-300";

function validate(data) {
  const errors = {};
  if (!data.get("nome")?.trim()) {
    errors.nome = "Inserisci nome e cognome.";
  }
  const email = data.get("email")?.trim() ?? "";
  if (!email) {
    errors.email = "Inserisci il tuo indirizzo email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email =
      "L'indirizzo email non sembra corretto: controlla che sia come nome@esempio.it.";
  }
  const digits = (data.get("telefono") ?? "").replace(/\D/g, "");
  if (!digits) {
    errors.telefono = "Inserisci un numero di telefono per essere ricontattato.";
  } else if (digits.length < 6) {
    errors.telefono =
      "Il numero di telefono è troppo corto: controlla di averlo scritto per intero.";
  }
  if (!data.get("privacy")) {
    errors.privacy =
      "Per inviare la richiesta devi dichiarare di aver letto l'informativa privacy.";
  }
  return errors;
}

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800">
        {label}
        {optional && (
          <span className="font-normal text-slate-500"> (facoltativo)</span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-errore`} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function errorProps(id, error) {
  return error
    ? { "aria-invalid": true, "aria-describedby": `${id}-errore` }
    : {};
}

function Select({ id, name, defaultValue, children }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className={`${INPUT} ${borderFor()} cursor-pointer appearance-none pr-10`}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
      />
    </div>
  );
}

// `params`: query string della pagina (?prof=, ?tema=), letta dopo
// l'idratazione da Consulenze.jsx
export default function ConsulenzaForm({ params }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState({});

  const selectedService = findService(params.get("tema"));
  const selectedProfessional = namedProfessionals.find(
    (p) => p.slug === params.get("prof"),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const found = validate(formData);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setSendError("");
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("pagina_provenienza", getSourcePage());
    formData.append(
      "pagina_modulo",
      window.location.pathname + window.location.search,
    );
    formData.set("privacy", "Accettata");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        if (hasMarketingConsent() && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
        setStatus("sent");
      } else {
        setStatus("idle");
        setSendError(
          "La richiesta non è stata inviata per un errore del servizio. Riprova tra qualche minuto oppure chiamaci.",
        );
      }
    } catch {
      setStatus("idle");
      setSendError(
        "La richiesta non è stata inviata: controlla la connessione a internet e riprova, oppure chiamaci.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-slate-900/5 md:p-14"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CircleCheckBig aria-hidden="true" className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-3xl font-bold">Richiesta inviata</h2>
        <p className="mx-auto mt-4 max-w-md text-lg">
          Grazie. Ti contatteremo entro {studio.responseTime} per l'analisi
          gratuita della tua situazione.
        </p>
        <button
          type="button"
          onClick={() => {
            setErrors({});
            setStatus("idle");
          }}
          className="link mt-6"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-900/5 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="nome" label="Nome e cognome" error={errors.nome}>
          <input
            id="nome"
            type="text"
            name="nome"
            autoComplete="name"
            className={`${INPUT} ${borderFor(errors.nome)}`}
            {...errorProps("nome", errors.nome)}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            className={`${INPUT} ${borderFor(errors.email)}`}
            {...errorProps("email", errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="telefono" label="Telefono" error={errors.telefono}>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            autoComplete="tel"
            className={`${INPUT} ${borderFor(errors.telefono)}`}
            {...errorProps("telefono", errors.telefono)}
          />
        </Field>
        <Field id="tipo_quesito" label="Di cosa hai bisogno?">
          <Select
            id="tipo_quesito"
            name="tipo_quesito"
            defaultValue={selectedService?.formLabel ?? SERVICES[0].formLabel}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.formLabel}>
                {s.label}
              </option>
            ))}
            <option value={OTHER_TOPIC}>Altro</option>
          </Select>
        </Field>
      </div>

      {namedProfessionals.length > 0 && (
        <Field id="professionista" label="Con chi vuoi parlare?">
          <Select
            id="professionista"
            name="professionista"
            defaultValue={selectedProfessional?.name ?? NO_PREFERENCE}
          >
            {namedProfessionals.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
                {p.specialties[0] ? ` (${p.specialties[0]})` : ""}
              </option>
            ))}
            <option value={NO_PREFERENCE}>{NO_PREFERENCE}</option>
          </Select>
        </Field>
      )}

      <Field id="messaggio" label="Raccontaci la tua situazione" optional>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          className={`${INPUT} ${borderFor()} resize-y`}
        />
      </Field>

      <div>
        <div className="flex gap-3">
          <input
            id="privacy"
            type="checkbox"
            name="privacy"
            value="si"
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-brand-600"
            {...errorProps("privacy", errors.privacy)}
          />
          <label htmlFor="privacy" className="cursor-pointer text-[15px]">
            Ho letto l'
            <Link to="/privacy-policy" target="_blank" className="link">
              informativa privacy
            </Link>{" "}
            e acconsento al trattamento dei dati.
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-errore" className="mt-2 text-sm text-red-700">
            {errors.privacy}
          </p>
        )}
      </div>

      {sendError && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
          {sendError}{" "}
          <a href={phoneHref} className="link">
            {studio.phone}
          </a>
        </p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="w-full"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
              Invio in corso
            </>
          ) : (
            <>
              Richiedi l'analisi gratuita
              <Send aria-hidden="true" className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="mt-4 text-center text-sm text-slate-500">
          Gratuita e senza impegno. Rispondiamo entro {studio.responseTime}.
        </p>
      </div>
    </form>
  );
}
