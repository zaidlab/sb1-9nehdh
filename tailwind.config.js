/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#04ecf0',
          500: '#04d4f0',
          600: '#6af2f0',
          700: '#059dc0',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
    },
  },
  plugins: [],
};
