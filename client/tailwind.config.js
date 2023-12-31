/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0A84FF",
          primary: "#1570CD",
        },
        dark: {
          DEFAULT: "#000",
          primary: "#111",
          secondary: "#222",
        },
        line: "#444",
        light: {
          DEFAULT: "#fff",
          primary: "#DDD",
          secondary: "#AAA",
        },
      },
    },
  },
  plugins: [],
};
