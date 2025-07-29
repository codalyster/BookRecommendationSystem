/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "Color-Scheme-1-Background": "#fff",
        "Color-Scheme-1-Text": "#000",
        "Color-Scheme-1-Border": "#000",
        "Color-Neutral-Darkest": "#000",
        "Color-White": "#fff",
        "Color-Scheme-1-Foreground": "#fff",
      },
      spacing: {
        "Page-Padding-padding-global": "64px",
        "Container-container-large": "1280px",
        "Max-Width-max-width-medium": "560px",
        "Section-Padding-padding-section-large": "112px",
        "Max-Width-max-width-large": "768px",
        "Section-Padding-padding-section-medium": "80px",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "Radius-Small": "0px",
        "Radius-Large": "0px",
      },
      borderWidth: {
        "Stroke-Border-Width": "1px",
      },
    },
    fontSize: {
      "Text-Sizes-Text-Regular": "16px",
      "Text-Sizes-Heading-1": "56px",
      "Text-Sizes-Text-Medium": "18px",
      "Text-Sizes-Heading-2": "48px",
      "Text-Sizes-Heading-4": "32px",
      "Text-Sizes-Heading-5": "24px",
      "Text-Sizes-Text-Small": "14px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq375: {
        raw: "screen and (max-width: 375px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
