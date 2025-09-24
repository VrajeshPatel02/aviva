/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        manrope: "var(--font-manrope)",
        worksans: "var(--font-worksans)",
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite'
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' }
        }
      }
    },
  },
};