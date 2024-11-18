/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      default: {
        "padding": "3.5em"
      },
      xm: {
        "padding": "1.2em"
      },
      sm: {
        "padding": "1.8em"
      },
      lg: {
        "padding": "4.5em"
      },
      xl: {
        "padding": "4.8em"
      },
      "2xl": {
        "padding": "5em"
      }
    }
  },
  plugins: [],
}

