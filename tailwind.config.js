/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        avion: {
          navy: "#001F54",
          ink: "#020711",
          green: "#9FEF00",
          cyan: "#45D6FF",
          violet: "#7C5CFF"
        }
      },
      boxShadow: {
        glow: "0 0 48px rgba(159, 239, 0, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
