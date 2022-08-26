/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '100%': { backgroundColor: theme('colors.transparent'), color: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [
    require('daisyui')
  ],

  // daisyUI config (optional)
  daisyui: {
    themes: ["halloween"],
  },
}
