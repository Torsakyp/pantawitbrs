module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["12px", "auto"],
      base: ["16px", "auto"],
      lg: ["18px", "auto"],
      xl: ["20px", "auto"],
      "2xl": ["24px", "auto"],
      "3xl": ["28px", "auto"],
      "4xl": ["32px", "auto"],
      "5xl": ["36px", "auto"],
      "6xl": ["50px", "auto"],
    },
    screens: {
      xl: { max: "2560px" },
      lg: { max: "1280px" },
      md: { max: "991px" },
      sm: { max: "479px" },
    },
    extend: {
      backgroundImage: {
        "welcome-bg": "src/assests/videos/hi_in-out.gif",
      },
    },
  },
  plugins: [],
};
