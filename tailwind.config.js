/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blu Fisco3 (#1657E8) e la sua scala
        brand: {
          50: "#EEF4FF",
          100: "#DDE8FE",
          200: "#BCD1FD",
          300: "#8DB0FA",
          400: "#5584F3",
          500: "#2E66EC",
          600: "#1657E8",
          700: "#1146C4",
          800: "#123A9C",
          900: "#132F75",
        },
        // Blu notte per sezioni scure e footer
        navy: {
          800: "#14234A",
          900: "#0C1733",
          950: "#081026",
        },

        // Nuova palette (in prova su /anteprima-colori, non ancora applicata)
        inchiostro: {
          DEFAULT: "#14213D", // titoli, sezioni scure, footer
          profondo: "#0E182D", // solo punto finale dei gradienti scuri
          bordo: "#1E2D4F", // separatore tra sezioni scure adiacenti
        },
        fisco: {
          DEFAULT: "#1657E8", // solo pulsanti, link, focus
          hover: "#1148C4",
          tenue: "#E8EEFD", // stati selezionati, piccoli evidenziatori
        },
        carta: {
          DEFAULT: "#F6F7F5", // sfondo pagina
          fredda: "#EEF1F6", // solo punto finale del gradiente dell'hero
        },
        pietra: {
          DEFAULT: "#E6E3DC", // sezioni alternate, bordi
          scura: "#CFCBC1", // bordi dei pulsanti secondari
        },
        grafite: "#85878B", // bordi dei campi del modulo (contrasto 3:1)
        basalto: "#33363B", // testo
        "su-scuro": "#C9D2E3", // testo secondario su sfondo scuro
        ocra: "#B07D2A", // solo piccoli elementi decorativi, mai testo
      },
      // Gli unici gradienti consentiti: tonali, stessa tinta, verticali.
      // Vietati su pulsanti e testo; niente radial, bagliori o blur.
      backgroundImage: {
        "tonale-chiaro": "linear-gradient(to bottom, #F6F7F5, #EEF1F6)", // hero
        "tonale-scuro": "linear-gradient(to bottom, #14213D, #0E182D)", // cartelle, CTA finale, footer
        // solo se c'è testo sopra la foto del team
        "velo-foto": "linear-gradient(to bottom, transparent, rgba(14, 24, 45, 0.55))",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", '"Segoe UI"', "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "75rem", // 1200px
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.08)",
        "card-hover":
          "0 2px 4px rgba(15, 23, 42, 0.05), 0 16px 40px -8px rgba(15, 23, 42, 0.14)",
        elevated: "0 30px 60px -20px rgba(15, 23, 42, 0.30)",
        float: "0 -4px 24px rgba(15, 23, 42, 0.10)",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
    // Raggi massimi: 6px pulsanti e campi, 10px card e immagini
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "6px",
      md: "6px",
      lg: "10px",
    },
  },
  plugins: [],
};
