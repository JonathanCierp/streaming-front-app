const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: {
        light: "#090942",
        dark1: "#FD413C",
        dark2: "#419CB7",
        dark3: "#1588F9"
      },
      secondary: {
        light: "#090942",
        dark1: "#CF521E",
        dark2: "#CF521E",
        dark3: "#CF521E"
      },
      red: {
        primary: "#f25353",
        lighter: "#FFE0E3"
      },
      green: {
        primary: "#22E3AC",
        lighter: "#E8FCF7"
      }
    },
    extend: {
      colors: {
        background: {
          overlay: "rgba(0, 0, 0, .7)"
        },
        "background-default": {
          light: "#F7FAFC",
          dark1: "#212529",
          dark2: "#1b2137",
          dark3: "#181B30"
        },
        "background-primary": {
          light: "#F7FAFC",
          dark1: "#272b2f",
          dark2: "#354060",
          dark3: "#0e1224"
        },
        "background-secondary": {
          light: "#F7FAFC",
          dark1: "#40464d",
          dark2: "#4E5B7E",
          dark3: "#252D42",
          "hover-dark1": "#363B40",
          "hover-dark2": "#445071",
          "hover-dark3": "#1D2235"
        },
        default: {
          light: "#090942",
          dark1: "#E0E0E0",
          dark2: "#E0E0E0",
          dark3: "#E0E0E0"
        },
        grey: {
          light: "#090942",
          dark1: "#D1D1D1",
          dark2: "#D1D1D1",
          dark3: "#D1D1D1"
        }
      }
    }
  },
  plugins: [require("tailwindcss-dark-mode")()]
}
