import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, LoaderCircle } from "lucide-react";
import Button from "./ui/Button.jsx";
import { studio, namedProfessionals, phoneHref } from "../config/studio";
import { SERVICES, OTHER_TOPIC, findService } from "../data/services.js";
import { hasMarketingConsent } from "../lib/consent.js";
import { getSourcePage } from "../lib/navigation.js";

const WEB3FORMS_ACCESS_KEY = "42a317e3-dcef-4a16-abd3-7e30c6373cd0";
const NO_PREFERENCE = "Nessuna preferenza";

const INPUT =
  "w-full rounded-sm border bg-bianco px-4 py-3 text-inchiostro placeholder:text-basalto-tenue";
const borderFor = (error) => (error ? "border-errore" : "border-pietra-scura");

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
      <label htmlFor={id} className="block font-medium text-inchiostro">
        {label}
        {optional && (
          <span className="font-normal text-basalto-tenue"> (facoltativo)</span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-errore`} className="mt-2 text-small text-errore">
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
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-basalto-tenue"
      />
    </div>
  );
}

export default function ConsulenzaForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState({});

  const selectedService = findService(searchParams.get("tema"));
  const selectedProfessional = namedProfessionals.find(
    (p) => p.slug === searchParams.get("prof"),
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
        className="rounded-md border border-pietra bg-bianco p-6 md:p-10"
      >
        <h2 className="text-h2">Richiesta inviata</h2>
        <p className="mt-4 max-w-prose">
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
      className="space-y-6 rounded-md border border-pietra bg-bianco p-6 md:p-10"
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
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-blu"
            {...errorProps("privacy", errors.privacy)}
          />
          <label htmlFor="privacy" className="cursor-pointer">
            Ho letto l'
            <Link to="/privacy-policy" target="_blank" className="link">
              informativa privacy
            </Link>{" "}
            e acconsento al trattamento dei dati.
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-errore" className="mt-2 text-small text-errore">
            {errors.privacy}
          </p>
        )}
      </div>

      {sendError && (
        <p role="alert" className="text-errore">
          {sendError}{" "}
          <a href={phoneHref} className="link">
            {studio.phone}
          </a>
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
              Invio in corso
            </>
          ) : (
            "Richiedi l'analisi gratuita"
          )}
        </Button>
      </div>

      <input type="hidden" name="pagina_provenienza" value={getSourcePage()} />
      <input
        type="hidden"
        name="pagina_modulo"
        value={`/consulenze${searchParams.toString() ? `?${searchParams}` : ""}`}
      />
    </form>
  );
}
