import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {},
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
        src: 'url(/fonts/jost/400-regular.woff) format("woff")',
      },
      {
        fontFamily: "Jost",
        fontWeight: "500",
        src: 'url(/fonts/jost/500-medium.woff) format("woff")',
      },
      {
        fontFamily: "Jost",
        fontWeight: "600",
        src: 'url(/fonts/jost/600-medium.woff) format("woff")',
      },
      {
        fontFamily: "Jost",
        fontWeight: "700",
        src: 'url(/fonts/jost/700-medium.woff) format("woff")',
      },
      {
        fontFamily: "Jost",
        fontWeight: "800",
        src: 'url(/fonts/jost/800-medium.woff) format("woff")',
      },
    ],
  },
} as Options;
