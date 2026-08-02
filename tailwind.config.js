/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F9FA",     // Near-white background
        charcoal: "#111827",   // Primary text
        slate: "#1E293B",      // Structural elements
        cobalt: "#2563EB",     // Accent links / buttons
      },
    },
  },
  plugins: [],
}