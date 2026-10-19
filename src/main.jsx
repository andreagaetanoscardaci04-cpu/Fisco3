import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { captureCampaign } from "./lib/navigation.js";
import "./index.css";

captureCampaign();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Could not find root element to mount to");

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// In produzione l'HTML è già prerenderizzato: lo idratiamo.
if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);
