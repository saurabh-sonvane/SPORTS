/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // app dir
    "./pages/**/*.{js,ts,jsx,tsx}",    // pages dir (if used)
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}
