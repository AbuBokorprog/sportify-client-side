/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000", //Black

          secondary: "#06b6d4", //Cyan

          info: "#06b6d4", //

          neutral: "#21323b",

          "base-100": "#FFFFFF",

          accent: "#b3bde6",

          success: "#25d497",

          warning: "#f9aa48",

          error: "#ea4354",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
