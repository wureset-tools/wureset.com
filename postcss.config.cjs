module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purgecss: {
      content: ['./**/*.{astro,ts,tsx,html}'],
    },
  },
};
