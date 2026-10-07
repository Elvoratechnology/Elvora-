/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./portfolio.html",
    "./planner.html",
    "./contact.html",
    "./blog.html",
    "./team.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: '#111111',
        muted: '#6B6B6B',
      },
    },
  },
  plugins: [],
}
