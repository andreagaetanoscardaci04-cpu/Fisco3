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
        button: "0 8px 20px -6px rgba(22, 87, 232, 0.55)",
        float: "0 -4px 24px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};
