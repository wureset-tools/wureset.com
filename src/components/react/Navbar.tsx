import LanguageIcon from '@mui/icons-material/Language';
import {
  Button,
  CssBaseline,
  Link,
  SpeedDial,
  SpeedDialAction,
  ThemeProvider,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import i18next, { setDefaultNamespace, t } from 'i18next';
import React from 'react';

import { theme } from './Theme';

setDefaultNamespace('common');

const lang = i18next.resolvedLanguage;

const path = ['br', 'de', 'es', 'fr', 'it'].includes(lang) ? `/${lang}/` : '/';

const links = [
  { id: 1, route: t('navbar.home'), url: path },
  { id: 2, route: t('navbar.downloads'), url: `${path}downloads` },
  { id: 3, route: t('navbar.about'), url: `${path}about` },
  { id: 4, route: t('navbar.support'), url: `${path}support` },
];

const actions = [
  { id: 'br', title: 'Português', url: '/br' },
  { id: 'de', title: 'Deutsch', url: '/de' },
  { id: 'en', title: 'English', url: '/' },
  { id: 'es', title: 'Español', url: '/es' },
  { id: 'fr', title: 'Français', url: '/fr' },
  { id: 'it', title: 'Italiano', url: '/it' },
];

const Navbar = (): React.ReactElement => {
  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography>
              {links.map((link) => (
                <Button
                  color="inherit"
                  component="a"
                  href={link.url}
                  key={link.id}
                >
                  {link.route}
                </Button>
              ))}
            </Typography>
          </Toolbar>
        </AppBar>
        <SpeedDial
          sx={{ position: 'fixed', top: 36, right: 36, zIndex: 1150 }}
          ariaLabel="Language"
          icon={<LanguageIcon />}
          direction={'down'}
          FabProps={{
            sx: {
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.main',
              },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{
                bgcolor: 'secondary.main',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
              key={action.id}
              icon={
                <Link
                  href={action.url}
                  sx={{ color: 'white', textDecoration: 'none' }}
                >
                  <Typography>{action.id}</Typography>
                </Link>
              }
              tooltipTitle={action.title}
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
    </Box>
  );
};

export { Navbar };
