// 1. Import daisyui at the top
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  // 2. Use the imported variable here
  plugins: [
    daisyui,
  ],

  daisyui: {
    themes: ["light"], 
  },
}