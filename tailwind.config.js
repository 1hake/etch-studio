// tailwind config file for typescript

module.exports = {
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
    options: {},
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
};
