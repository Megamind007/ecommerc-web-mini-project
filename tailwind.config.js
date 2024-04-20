/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '0/9': '85%',
      },
      height:{
        '1/4': '46%',
      },
    },
  },
  plugins: [],
};
