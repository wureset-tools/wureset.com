const paths = [
  { name: 'home', route: '/' },
  { name: 'downloads', route: '/downloads' },
  { name: 'about', route: '/about' },
  { name: 'support', route: '/support' },
];

const languages = [
  { title: 'br', name: 'Português' },
  { title: 'de', name: 'Deutsch' },
  { title: 'en', name: 'English' },
  { title: 'es', name: 'Español' },
  { title: 'fr', name: 'Français' },
  { title: 'it', name: 'Italiano' },
];

export function localizePath(path: string, locale: string): string {
  if (locale === 'en') {
    return path;
  }

  return '/' + locale + path;
}

export { languages, paths };
