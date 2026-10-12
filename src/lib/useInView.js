import { useEffect, useRef, useState } from "react";

// true la prima volta che l'elemento entra nello schermo, poi resta true:
// ogni animazione parte una volta sola. Senza IntersectionObserver mostra
// subito il contenuto.
export function useInView({ threshold = 0.25, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
}

// Attributo da mettere sul contenitore: il CSS anima i figli quando c'è
export const inViewAttr = (inView) => (inView ? { "data-inview": "" } : {});
