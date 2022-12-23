import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,

  theme: {
    colors: {
      gray: {
        100: "#DBE0E6",
        200: "#CFD5DE",
        300: "#C2CAD6",
        400: "#91A0B6",
        500: "#8595AD",
        600: "#718096",
        700: "#4A5568",
        800: "#2D3748",
        900: "#1A202C",
      },
      green: {
        100: "#126818",
        200: "#0F5714",
        300: "#0C460F",
        400: "#0C4610",
        500: "#09340C",
        600: "#062308",
        700: "#031204",
        800: "#031104",
      },
      white: {
        500: "#FFFFFF",
        600: "#F5F5F5",
      },
    },
    extend: {
      fontFamily: {
        sans: "Jost, sans-serif",
      },
      keyframes: {
        "move-chevron": {
          "25%": {
            opacity: "1",
          },
          "33.3%": {
            opacity: "1",
            transform: "translateY(30px)",
          },
          "66.6%": {
            opacity: "1",
            transform: "translateY(42px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(64px) scale(0.5)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-out-down": {
          "from": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "to": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-out-up": {
          "from": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "to": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "move-chevron-1st": "move-chevron 3s ease-out 1s infinite",
        "move-chevron-nth": "move-chevron 3s ease-out 2s infinite",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap')`,
    // Declare font face
    "@font-face": [
      {
        fontFamily: "Jost",
        fontWeight: "400",
        src:
          "url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format(woff2)",
      },
      {
        fontFamily: "Jost",
        fontWeight: "500",
        src:
          "url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format(woff2)",
      },
      {
        fontFamily: "Jost",
        fontWeight: "600",
        src:
          "url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format(woff2)",
      },
      {
        fontFamily: "Jost",
        fontWeight: "700",
        src:
          "url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format(woff2)",
      },
      {
        fontFamily: "Jost",
        fontWeight: "800",
        src:
          "url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format(woff2)",
      },
    ],
  },
} as Options;
