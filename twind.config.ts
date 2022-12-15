import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,

  theme: {
    backgroundImage: {
      "proposal": "url('/static/proposal.jpg')",
    },
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
