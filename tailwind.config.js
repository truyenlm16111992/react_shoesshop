/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
      // },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: 0 },
        }
      },
    },
  },
  plugins: [],
}

