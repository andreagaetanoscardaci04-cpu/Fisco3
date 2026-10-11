import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, findRoute } from "./routes.js";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Aggiorna title, description, canonical e Open Graph nei cambi di pagina
// interni (al primo caricamento li ha già scritti il prerendering).
export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);
    const url = canonicalUrl(route.path);
    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", route.title);
    setMeta('meta[name="twitter:description"]', "content", route.description);
  }, [pathname]);
}
