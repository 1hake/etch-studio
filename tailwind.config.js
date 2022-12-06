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
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      backgroundImage: (theme) => ({
        "light-logo":
          "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/logo.png?alt=media&token=c965b25f-a2a0-4f7d-824d-30b64f6a1b1a')",
        "dark-logo":
          "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/WhatsApp%20Image%202022-11-20%20at%2018.00.18.png?alt=media&token=a962ba31-c822-48e1-a5d1-b6bed037c665')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
};
