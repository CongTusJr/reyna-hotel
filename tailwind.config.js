/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      goldlg: "#c69960",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
