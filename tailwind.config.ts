import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        cursorAnim: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(.7)' },
        },
        cursorAnim2: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(.4)' },
        },
        cursorAnim3: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(3)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-slow-reverse': 'spin-reverse 30s linear infinite',
        cursorAnim: 'cursorAnim .5s infinite alternate ease-out',
        cursorAnim2: 'cursorAnim2 .5s infinite alternate ease-out',
        cursorAnim3: 'cursorAnim3 .5s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
