const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.{astro,ts,tsx,html}'],
      defaultExtractor: (content) => content.match(/[\w-/:%@]+(?<!:)/g) || [],
    }),
  ],
};
