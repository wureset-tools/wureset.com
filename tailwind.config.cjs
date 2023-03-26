/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      indigo: {
        main: '#3F51B5', // PRIMARY COLOR
        dark: '#303F9F', // DARK PRIMARY COLOR
        light: '#C5CAE9', // LIGHT PRIMARY COLOR
      },
      blue: {
        main: '#448AFF', // ACCENT COLOR
        dark: '#1976D2', // DARK ACCENT COLOR
        light: '#BBDEFB', // LIGHT ACCENT COLOR
      },
      black: '#212121', // PRIMARY TEXT
      white: '#FFFFFF', // TEXT/ICONS
      gray: {
        main: '#757575', // SECONDAY TEXT
        dark: '#616161', // DARK SECONDAY TEXT
        light: '#9E9E9E', // LIGHT SECONDAY TEXT
        divider: '#BDBDBD', // DIVIDER COLOR
        extralight: '#E0E0E0', // EXTRA LIGHT SECONDARY COLOR
      },
      purple: '#9C27B0', // VISITED LINK
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
