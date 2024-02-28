/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '20px 20px 60px #a4a4a4, -20px -20px 60px #dedede',
        inset: 'inset 20px 20px 60px #a4a4a4, inset -20px -20px 60px #dedede'
      }
    }
  },
  variants: {},
  plugins: []
}
