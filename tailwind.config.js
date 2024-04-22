/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green-500": "#3B5E69",
        "primary-grey-500": "#E3E7E8",
        "primary-grey-600": "#666666",
        "primary-grey-700": "#999",
        "primary-grey-400": "#F2F2F2",
        "primary-red-500": "#E6595D",
        "secondary-red-500": "#EBBDBC",
        "secondary-orange-500": "#FFE9E5",
        "secondary-blue-500": "#E5EAFF",
        "secondary-pink-500": "#F4E4ED",
        "secondary-yellow-500": "#FFF2CA"
      },
      fontFamily: {
        "custom": "Montserrat"
      },
      borderRadius: {
        "custom-full": "54px",
        "custom-default": "8px"
      },
      fontSize: {
        "custom-logo": "20px",
        "custom-xs": "12px",
        "custom-s": "16px",
        "custom-md": "18px",
        "custom-lg": "28.8px"
      }
    },
  },
  plugins: [],
};