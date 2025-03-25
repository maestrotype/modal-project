module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    "bg-yellow-100",
    "dark:bg-yellow-800",
    "bg-white",
    "dark:bg-gray-800"
  ],
  darkMode: "class",
  theme: {
    extend: {}
  },
  plugins: []
};
