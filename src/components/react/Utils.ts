import astroI18nextConfig from 'astro-i18next.config.mjs';

const locales = astroI18nextConfig.locales;

export const paths = [
  { name: 'home', route: '/' },
  { name: 'downloads', route: '/downloads' },
  { name: 'about', route: '/about' },
  { name: 'support', route: '/support' },
];

export const languages = [
  { locale: 'br', name: 'Português' },
  { locale: 'de', name: 'Deutsch' },
  { locale: 'en', name: 'English' },
  { locale: 'es', name: 'Español' },
  { locale: 'fr', name: 'Français' },
  { locale: 'it', name: 'Italiano' },
];

export const localizePath = (path: string, locale: string): string => {
  if (!locales.includes(locale)) return path;

  return '/' + locale + path;
};

export const resolveLanguage = (language: string): string =>
  locales.find((lang) => lang === language) ?? 'en';
