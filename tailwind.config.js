/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0c0e',
          900: '#111317',
          850: '#16191f',
          800: '#1c2028',
          750: '#232833',
          700: '#2b313e',
          border: '#262c38',
          borderLight: '#323a4a'
        },
        orange: {
          brand: '#ff5500',
          hover: '#e64900',
          glow: 'rgba(255, 85, 0, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
