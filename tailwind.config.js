module.exports = {
  purge: {
    enebled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      courier: ["courier new"],
    },
    extend: {
      animation: {
        spin: "spin 4s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
