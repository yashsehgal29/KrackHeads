/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lavender: "#cfecff",
        black: "#000",
        gray: "#777",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f4f4f4",
        },
        tomato: "#ff5757",
        lightcoral: {
          "100": "#fe9497",
          "200": "#fd7d80",
          "300": "rgba(253, 125, 128, 0.51)",
        },
        lightblue: "#b5d4e6",
        lavenderblush: {
          "100": "#fdecec",
          "200": "#f9e8f2",
        },
        darkslategray: {
          "100": "#414141",
          "200": "#3e3e3e",
          "300": "#373737",
        },
        lightsteelblue: "#bfd4fa",
        snow: "#fef6f6",
        indianred: "#e46164",
      },
      spacing: {},
      fontFamily: {
        "kumbh-sans": "'Kumbh Sans'",
        "walter-turncoat": "'Walter Turncoat'",
        lexend: "Lexend",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        "4xl": "23px",
        "29xl": "48px",
        "71xl": "90px",
        "20xl": "39px",
        "64xl": "83px",
        "19xl": "38px",
      },
    },
    fontSize: {
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      mini: "15px",
      lgi: "19px",
      "6xl": "25px",
      "51xl": "70px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "8xl": "27px",
      "3xl": "22px",
      base: "16px",
      xl: "20px",
      "41xl": "60px",
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