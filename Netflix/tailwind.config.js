/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-stop": "#000001",
        "logo-color": "#E50914",
      },
      maxWidth: {
        "custom-calc": "calc(100% - 4rem)",
      },
    },
  },
  plugins: [],
};
