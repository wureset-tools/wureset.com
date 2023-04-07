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
import { languages, localizePath, paths, resolveLanguage } from './Utils';

setDefaultNamespace('common');

const lang = resolveLanguage(i18next.language);

interface Props {
  pathname: string;
}

const Navbar = (props: Props): React.ReactElement => {
  const filename = props.pathname.substring(props.pathname.lastIndexOf('/'));

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            {paths.map((path) => (
              <Button
                color="inherit"
                component="a"
                href={localizePath(path.route, lang)}
                key={path.name}
                className="h-16 rounded-none"
              >
                {t('navbar.' + path.name) ?? path.name}
              </Button>
            ))}
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
            },
            className: 'bg-blue-main',
          }}
        >
          {languages.map((language) => (
            <SpeedDialAction
              sx={{
                bgcolor: 'secondary.main',
              }}
              className="bg-blue-main"
              key={language.locale}
              icon={
                <Link
                  href={localizePath(filename, language.locale)}
                  sx={{ color: 'white', textDecoration: 'none' }}
                >
                  <Typography>{language.locale}</Typography>
                </Link>
              }
              tooltipTitle={language.name}
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
    </Box>
  );
};

export { Navbar };
