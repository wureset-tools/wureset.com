import { CssBaseline, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

// DEPRECATED
import { theme } from './Theme';

const ActionButtons = React.lazy(async () => await import('./ActionButtons'));

interface Props {
  pathname: string;
}

const Navbar = (props: Props): React.ReactElement => {
  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ActionButtons pathname={props.pathname} />
      </ThemeProvider>
    </Box>
  );
};

export { Navbar };
