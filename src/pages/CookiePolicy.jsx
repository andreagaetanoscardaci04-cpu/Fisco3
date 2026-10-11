import LegalPage from "../components/LegalPage.jsx";
import Button from "../components/ui/Button.jsx";
import { OPEN_COOKIE_SETTINGS } from "../components/CookieBanner.jsx";

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie policy">
      <Button
        variant="secondary"
        className="mt-8"
        onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      >
        Modifica le preferenze cookie
      </Button>
    </LegalPage>
  );
}
