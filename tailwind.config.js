/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: ["class"],
  corePlugins: {
    backgroundClip: true,
  },
  variants: {
    extend: {
      backgroundClip: ["hover"],
      textColor: ["hover"],
    },
  },
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        satoshi: ["Satoshi"],
        sora: ["var(--font-sora)"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #000000, rgba(0, 0, 0, 0)), url('/Home/Cards/card1Bg.jpg')",
        "card-2": "url('/Home/Cards/card2Bg.jpg')",
        "card-3": "url('/Home/Cards/card3.jpg')",
        "work-gradient":
          "linear-gradient(272.35deg, #000000 16.85%, rgba(0, 0, 0, 0) 98.04%)",
        "work-gradient-alter":
          "linear-gradient(472.35deg, #000000 16.85%, rgba(0, 0, 0, 0) 98.04%)",
        "footer-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, #000 100%);",
        "footer-bg": "url('/Footer/Group363.png')",
        "about-member-gradient":
          "linear-gradient(180deg, #F3F3F3 0%, #FFF 100%)",

        "serviceinner-cta-bg-overlay": "url('/ServicesInner/cta-overlay.svg')",
        "work-header-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.43) 8.14%, rgba(0, 0, 0, 0.00) 140.64%)",
        "service-header-gradient":
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
  // purge: ['./pages/**/*.js', './components/**/*.js'],
};
