import { useEffect, useState } from "react";

// false durante il prerendering e il primo render nel browser, poi true.
// Serve per leggere dati solo-browser (es. query string) senza errori di
// idratazione.
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
