/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lavenderblush: "#f9e8f2",
        black: "#000",
        darkslategray: "#414141",
        lightcoral: {
          "100": "#fe9497",
          "200": "#fd7d80",
        },
        indianred: "#c94a4d",
        gainsboro: "#e6e6e6",
        tomato: "#ff5757",
      },
      spacing: {},
      fontFamily: {
        jost: "Jost",
        "kumbh-sans": "'Kumbh Sans'",
        "ink-free": "'Ink Free'",
      },
      borderRadius: {
        "19xl": "38px",
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      "8xl": "27px",
      "3xl": "22px",
      "11xl": "30px",
      xl: "20px",
      "6xl": "25px",
      "17xl": "36px",
      "29xl": "48px",
      "41xl": "60px",
      "46xl": "65px",
      "51xl": "70px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  }
}