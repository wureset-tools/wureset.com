/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'it', 'fr', 'es', 'de', 'br'],
  namespaces: ['common', 'home', 'downloads', 'about', 'support'],
  defaultNamespace: 'common',
  load: ['server', 'client'],
  i18nextServerPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
  i18nextClientPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
};
