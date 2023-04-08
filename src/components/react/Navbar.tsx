import LanguageIcon from '@mui/icons-material/Language';
import {
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
import React, { Suspense } from 'react';

import { theme } from './Theme';
import { languages, localizePath } from './Utils';

const Buttons = React.lazy(async () => await import('./Buttons'));

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
            <Suspense>
              <Buttons />
            </Suspense>
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
            className: 'bg-blue-main hover:bg-blue-light',
          }}
        >
          {languages.map((language) => (
            <SpeedDialAction
              sx={{
                bgcolor: 'secondary.main',
              }}
              className="bg-blue-main hover:bg-blue-light"
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
