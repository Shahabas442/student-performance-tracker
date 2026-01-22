export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Blue (buttons)
        secondary: "#06B6D4", // Cyan
        success: "#22C55E",   // Green
        warning: "#F59E0B",   // Yellow
        danger: "#EF4444",
        muted: "#F1F5F9",     // Light gray bg
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [],
}
