/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  variants: {
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(),
  ],
  darkMode: ['class', '.darkmode'],
}
