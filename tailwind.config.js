/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inchiostro: "#14213D",
      blu: { DEFAULT: "#1657E8", scuro: "#0F45BD" },
      basalto: { DEFAULT: "#33363B", tenue: "#5B5E64" },
      carta: "#F6F7F5",
      pietra: { DEFAULT: "#DAD8D2", scura: "#8A877F" },
      bianco: "#FFFFFF",
      errore: "#B42318",
      conferma: "#1E6B3A",
    },
    fontFamily: {
      serif: ['"Source Serif 4"', "Georgia", '"Times New Roman"', "serif"],
      sans: [
        '"IBM Plex Sans"',
        "system-ui",
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      // mobile first; le classi md: alzano i titoli su desktop
      small: ["0.9375rem", { lineHeight: "1.5" }], // 15
      body: ["1.0625rem", { lineHeight: "1.6" }], // 17
      "body-lg": ["1.125rem", { lineHeight: "1.6" }], // 18
      lead: ["1.1875rem", { lineHeight: "1.5" }], // 19
      "lead-lg": ["1.3125rem", { lineHeight: "1.5" }], // 21
      h3: ["1.3125rem", { lineHeight: "1.3" }], // 21
      "h3-lg": ["1.5rem", { lineHeight: "1.3" }], // 24
      h2: ["1.75rem", { lineHeight: "1.2" }], // 28
      "h2-lg": ["2.25rem", { lineHeight: "1.2" }], // 36
      display: ["2.125rem", { lineHeight: "1.1" }], // 34
      "display-lg": ["3.25rem", { lineHeight: "1.1" }], // 52
    },
    borderRadius: {
      none: "0",
      sm: "6px",
      md: "10px",
      full: "9999px", // solo per le foto tonde dei professionisti
    },
    boxShadow: {
      none: "none",
      float: "0 -2px 16px rgba(20, 33, 61, 0.12)",
    },
    extend: {
      maxWidth: {
        container: "75rem", // 1200px
        prose: "65ch",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
    },
  },
  plugins: [],
};
