module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/daisyui/dist/**/*.js",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      'sans': ['Century Gothic', 'sans-serif'],
      'futura-bkbt': ['Futura Bk BT', 'sans-serif'], // Agrega tu nueva fuente aquí
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
