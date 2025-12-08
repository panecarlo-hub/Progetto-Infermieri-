import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette sanitaria MediLinker
        primary: {
          50: '#E8F4FD',
          100: '#C5E4FA',
          200: '#9DD2F7',
          300: '#6ABBF3',
          400: '#3BA6EF',
          500: '#0A74DA', // Blu sanitario principale
          600: '#0862B8',
          700: '#064E94',
          800: '#043A70',
          900: '#02264C',
        },
        secondary: {
          50: '#E6F7F5',
          100: '#C2EBE6',
          200: '#99DED5',
          300: '#6DD0C4',
          400: '#47C4B5',
          500: '#21B6A8', // Verde acqua
          600: '#1B9A8E',
          700: '#157D73',
          800: '#0F6058',
          900: '#09433D',
        },
        accent: {
          50: '#FEF5E7',
          100: '#FDE8C4',
          200: '#FCD99D',
          300: '#FACA76',
          400: '#F9BC54',
          500: '#F7A932', // Arancione caldo accento
          600: '#D9922B',
          700: '#B87A24',
          800: '#96621D',
          900: '#744A16',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 40px -10px rgba(10, 116, 218, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
