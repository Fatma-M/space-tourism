/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      colors: {
        "dark-blue": "#0B0D17",
        "dark-gray": "#979797",
        "light-gray": "rgba(255,255,255,0.15)",
        gray: "#D0D6F9",
      },
      container: {
        center: true,
        padding: "5rem",
      },
      backgroundImage: {
        "home-desktop-img": "url('@/assets/home/background-home-desktop.jpg') ",
        "home-tablet-img": "url('@/assets/home/background-home-tablet.jpg') ",
        "home-mobile-img": "url('@/assets/home/background-home-mobile.jpg') ",

        "destination-desktop-img":
          "url(@/assets/destination/background-destination-desktop.jpg)",
        "destination-tablet-img":
          "url(@/assets/destination/background-destination-tablet.jpg)",
        "destination-mobile-img":
          "url(@/assets/destination/background-destination-mobile.jpg)",

        "crew-desktop-img": "url('@/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet-img": "url('@/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile-img": "url('@/assets/crew/background-crew-mobile.jpg')",

        "tech-desktop-img":
          "url(@/assets/technology/background-technology-desktop.jpg)",
        "tech-tablet-img":
          "url(@/assets/technology/background-technology-tablet.jpg)",
        "tech-mobile-img":
          "url(@/assets/technology/background-technology-mobile.jpg)",
      },
    },
  },
  plugins: [],
};
