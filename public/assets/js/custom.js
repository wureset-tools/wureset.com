document.addEventListener('DOMContentLoaded', function () {
  cookieconsent.initialise({
    palette: {
      popup: {
        background: '#237afc',
      },
      button: {
        background: '#fff',
        text: '#237afc',
      },
    },
    position: 'bottom',
    content: {
      href: '/cookies-policy',
    },
  });
});
