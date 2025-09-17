// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        moyo: {
          dark: "#4A5A3D", // Olive green
          light: "#F5F3EB", // Soft beige
          text: "#2F3B26", // Rich green-black
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [],
};
