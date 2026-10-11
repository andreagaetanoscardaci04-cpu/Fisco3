// Genera un file HTML statico per ogni pagina, con contenuto e meta tag,
// a partire dalla build client (dist/) e dalla build SSR (dist-server/).
// Viene eseguito da `npm run build`. Ogni pagina diventa dist/<pagina>.html,
// servita come /<pagina> grazie a "cleanUrls" in vercel.json.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverEntry = join(root, "dist-server", "entry-server.js");

const { render, ROUTES, headTags, siteUrl } = await import(
  pathToFileURL(serverEntry).href
);
const template = await readFile(join(dist, "index.html"), "utf-8");

if (!/<title>.*<\/title>/.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html non contiene <title> o <div id=\"root\"></div>");
}

for (const route of ROUTES) {
  const appHtml = render(route.path);
  const h1Count = (appHtml.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) {
    throw new Error(`${route.path}: trovati ${h1Count} h1, ne serve esattamente 1`);
  }

  const html = template
    .replace(/<title>.*<\/title>/, headTags(route.path))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const file =
    route.file ??
    (route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`);
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), html);
  console.log(`prerender  ${route.path.padEnd(16)} -> dist/${file.replaceAll("\\", "/")}`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => !r.noindex)
  .map(
    (r) =>
      `  <url>\n    <loc>${siteUrl}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
  )
  .join("\n");
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
console.log("generati   dist/sitemap.xml, dist/robots.txt");

await rm(join(root, "dist-server"), { recursive: true, force: true });
