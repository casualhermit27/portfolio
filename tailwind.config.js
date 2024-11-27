/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': { 
            transform: 'translate(-50%, -50%) rotate(var(--tw-rotate))'  // Start from initial rotation
          },
          '100%': { 
            transform: 'translate(-50%, -50%) rotate(calc(var(--tw-rotate) + 360deg))'  // Complete one full rotation
          }
        }
      },
      animation: {
        'orbit-8': 'orbit 8s linear infinite',
        'orbit-12': 'orbit 12s linear infinite',
        'orbit-16': 'orbit 16s linear infinite',
        'orbit-20': 'orbit 20s linear infinite',
        'orbit-25': 'orbit 25s linear infinite',
        'orbit-30': 'orbit 30s linear infinite',
        'orbit-35': 'orbit 35s linear infinite',
        'orbit-40': 'orbit 40s linear infinite',
      }
    }
  },
  plugins: [],
}