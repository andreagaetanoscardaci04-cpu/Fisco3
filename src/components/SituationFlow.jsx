import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CircleCheckBig,
  ClipboardList,
  FileText,
  FolderOpen,
  LoaderCircle,
  MessageSquareText,
  Rocket,
  Send,
  ShieldCheck,
} from "lucide-react";
import Button from "./ui/Button.jsx";
import {
  Field,
  INPUT,
  borderFor,
  errorProps,
  validateContact,
} from "./ConsulenzaForm.jsx";
import { studio, phoneHref } from "../config/studio";
import { SITUATION_FLOWS, findFlow } from "../data/situations.js";
import { sendRequest } from "../lib/sendRequest.js";

// Modulo a passi di /analisi-gratuita: 1. la situazione, 2. domande
// specifiche, 3. contatti. Con ?tema= si parte direttamente dal passo 2.

const ICONS = {
  cartelle: ShieldCheck,
  apertura: Rocket,
  gestione: Briefcase,
  730: FileText,
  "resto-al-sud": ClipboardList,
  altro: MessageSquareText,
};

const CARD = "rounded-lg bg-white shadow-card ring-1 ring-pietra";

function StepHeader({ step, onBack, backLabel }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-pietra px-5 py-3 md:px-8">
      <button
        type="button"
        onClick={onBack}
        className="-ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-semibold text-fisco hover:bg-fisco-tenue"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        {backLabel}
      </button>
      <p className="text-sm text-basalto">Passo {step} di 3</p>
    </div>
  );
}

// Le sei situazioni sono il primo clic della pagina: schede-pulsante in blu
// Fisco3, che al passaggio (o al tocco) si riempiono di blu
function Choices({ onChoose }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 md:gap-4">
      {SITUATION_FLOWS.map((flow) => {
        const Icon = ICONS[flow.slug];
        return (
          <li key={flow.slug}>
            <button
              type="button"
              onClick={() => onChoose(flow.slug)}
              className="group flex h-full w-full items-center gap-4 rounded-lg bg-white p-4 text-left shadow-card ring-2 ring-inset ring-fisco/25 transition duration-200 hover:-translate-y-0.5 hover:bg-fisco hover:shadow-elevated hover:ring-fisco focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fisco/50 active:translate-y-0 active:bg-fisco-hover md:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-fisco text-white transition-colors duration-200 group-hover:bg-white group-hover:text-fisco group-active:bg-white group-active:text-fisco">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <span className="flex-1 text-[17px] font-semibold leading-snug text-inchiostro transition-colors duration-200 group-hover:text-white group-active:text-white">
                {flow.choice}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fisco-tenue text-fisco transition duration-200 group-hover:translate-x-0.5 group-hover:bg-white group-active:bg-white">
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function Question({ question, value, error, onAnswer }) {
  const errorId = `${question.id}-errore`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="font-semibold text-inchiostro">{question.label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {question.options.map((option) => {
          const checked = value === option;
          return (
            <label
              key={option}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-md px-4 py-2 text-[15px] ring-1 ring-inset transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-fisco-tenue ${
                checked
                  ? "bg-inchiostro font-semibold text-white ring-inchiostro"
                  : "bg-carta text-inchiostro ring-pietra-scura hover:bg-pietra"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={checked}
                onChange={() => onAnswer(question.id, option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function WeDo({ flow }) {
  return (
    <div className="rounded-lg bg-pietra p-5 md:p-6">
      <h3 className="text-base font-semibold">Cosa facciamo per te</h3>
      <ul className="mt-3 space-y-2.5">
        {flow.weDo.map((text) => (
          <li key={text} className="flex gap-2.5 text-[15px] leading-relaxed">
            <CircleCheckBig aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-ocra" />
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-4 flex gap-2.5 border-t border-pietra-scura pt-4 text-[15px] leading-relaxed">
        <FolderOpen aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-basalto" />
        <span>
          <span className="font-semibold text-inchiostro">Tieni pronto: </span>
          {flow.prepare}.
        </span>
      </p>
    </div>
  );
}

function Sent({ flow, onRestart }) {
  return (
    <div role="status" className={`${CARD} p-8 text-center md:p-12`}>
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
        <CircleCheckBig aria-hidden="true" className="h-8 w-8" />
      </span>
      <h2 className="mt-6 text-3xl font-bold">Richiesta ricevuta</h2>
      <p className="mx-auto mt-4 max-w-md text-lg">
        Ti richiama {flow.specialist} entro {studio.responseTime}.
      </p>
      <p className="mx-auto mt-6 max-w-md rounded-lg bg-pietra p-5 text-left text-[15px] leading-relaxed">
        <span className="font-semibold text-inchiostro">Intanto tieni a portata di mano </span>
        {flow.prepare}: ti servirà durante la telefonata.
      </p>
      <p className="mt-6 text-[15px]">
        Vuoi parlarne prima?{" "}
        <a href={phoneHref} className="link">
          Chiama {studio.phone}
        </a>
      </p>
      <button type="button" onClick={onRestart} className="link mt-4 text-[15px]">
        Invia un'altra richiesta
      </button>
    </div>
  );
}

// `params`: query string della pagina, letta dopo l'idratazione
export default function SituationFlow({ params }) {
  const initialFlow = findFlow(params.get("tema"));
  const [slug, setSlug] = useState(initialFlow?.slug ?? null);
  const [step, setStep] = useState(initialFlow ? 2 : 1);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [sendError, setSendError] = useState("");
  const headingRef = useRef(null);
  const rootRef = useRef(null);
  const moved = useRef(false);

  const flow = findFlow(slug);

  // A ogni cambio di passo: titolo in vista e focus per i lettori di schermo
  useEffect(() => {
    if (!moved.current) return;
    rootRef.current?.scrollIntoView({ block: "start" });
    headingRef.current?.focus({ preventScroll: true });
  }, [step, status]);

  const go = (nextStep) => {
    moved.current = true;
    setErrors({});
    setStep(nextStep);
  };

  const choose = (nextSlug) => {
    if (nextSlug !== slug) setAnswers({});
    setSlug(nextSlug);
    go(2);
  };

  const answer = (id, value) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const toContacts = () => {
    const missing = flow.questions.filter((q) => !answers[q.id]);
    if (missing.length) {
      setErrors(
        Object.fromEntries(missing.map((q) => [q.id, "Scegli una risposta."])),
      );
      rootRef.current
        ?.querySelector(`input[name="${missing[0].id}"]`)
        ?.focus();
      return;
    }
    go(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const found = validateContact(formData);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    formData.set("privacy", "Accettata");
    formData.set("tipo_quesito", flow.formLabel);
    formData.set("situazione", answers.situazione ?? flow.situazione ?? "");
    formData.set(
      "dettagli",
      flow.questions
        .filter((q) => q.id !== "situazione")
        .map((q) => `${q.label.replace(/[:?]$/, "")}: ${answers[q.id]}`)
        .join("\n"),
    );

    setStatus("sending");
    setSendError("");
    const error = await sendRequest(formData);
    moved.current = !error;
    setStatus(error ? "idle" : "sent");
    setSendError(error ?? "");
  };

  const restart = () => {
    moved.current = true;
    setAnswers({});
    setSlug(null);
    setStatus("idle");
    setStep(1);
  };

  if (status === "sent") {
    return (
      <div ref={rootRef} className="scroll-mt-6">
        <div ref={headingRef} tabIndex={-1} className="outline-none">
          <Sent flow={flow} onRestart={restart} />
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="scroll-mt-6">
      {step === 1 && (
        <>
          <h2 ref={headingRef} tabIndex={-1} className="sr-only">
            Scegli la tua situazione
          </h2>
          <Choices onChoose={choose} />
        </>
      )}

      {step === 2 && flow && (
        <div className={CARD}>
          <StepHeader step={2} onBack={() => go(1)} backLabel="Cambia situazione" />
          <div className="p-5 md:p-8">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-bold outline-none md:text-3xl"
            >
              {flow.title}
            </h2>
            <p className="mt-2 text-[15px]">
              Qualche domanda per capire subito come aiutarti.
            </p>
            <div className="mt-7 grid gap-8 lg:grid-cols-5 lg:gap-10">
              <div className="space-y-7 lg:col-span-3">
                {flow.questions.map((q) => (
                  <Question
                    key={q.id}
                    question={q}
                    value={answers[q.id]}
                    error={errors[q.id]}
                    onAnswer={answer}
                  />
                ))}
              </div>
              <div className="lg:col-span-2">
                <WeDo flow={flow} />
              </div>
            </div>
            <Button size="lg" onClick={toContacts} className="mt-8 w-full sm:w-auto">
              Avanti
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && flow && (
        <form noValidate onSubmit={handleSubmit} className={CARD}>
          <StepHeader step={3} onBack={() => go(2)} backLabel="Modifica le risposte" />
          <div className="space-y-6 p-5 md:p-8">
            <div>
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="text-2xl font-bold outline-none md:text-3xl"
              >
                Dove ti ricontattiamo?
              </h2>
              <p className="mt-2 text-[15px]">
                Ti richiama {flow.specialist}, che avrà già le tue risposte.
              </p>
            </div>

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
            </div>
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

            {/* Campo trappola per i bot, nascosto alle persone */}
            <input
              type="text"
              name="sito_web"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <Field id="messaggio" label="Vuoi aggiungere qualcosa?" optional>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={3}
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
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-fisco"
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
              <p role="alert" className="rounded-md bg-red-50 p-4 text-red-800">
                {sendError}{" "}
                <a href={phoneHref} className="link">
                  {studio.phone}
                </a>
              </p>
            )}

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
                  Invia la richiesta
                  <Send aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
