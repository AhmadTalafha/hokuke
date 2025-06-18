/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#5E5E5E',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#5E5E5E',
          800: '#5E5E5E',
          900: '#8A1839',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          // 400: '#5E5E5E',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        olive: {
          50: '#f7f8f0',
          100: '#eef0dd',
          200: '#dde2bf',
          300: '#c6cf98',
          400: '#b0bc75',
          500: '#9ca857',
          600: '#7a8544',
          700: '#5f6737',
          800: '#4e5330',
          900: '#43472c',
        }
      },
    },
  },
  plugins: [],
};