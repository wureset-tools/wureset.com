import { CssBaseline, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React, { Suspense } from 'react';

import { theme } from './Theme';

const Buttons = React.lazy(async () => await import('./Buttons'));
const ActionButtons = React.lazy(async () => await import('./ActionButtons'));

interface Props {
  pathname: string;
}

const Navbar = (props: Props): React.ReactElement => {
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
        <Suspense>
          <ActionButtons pathname={props.pathname} />
        </Suspense>
      </ThemeProvider>
    </Box>
  );
};

export { Navbar };
