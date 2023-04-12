import LanguageIcon from '@mui/icons-material/Language';
import {
  CssBaseline,
  Link,
  SpeedDial,
  SpeedDialAction,
  ThemeProvider,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

import { theme } from './Theme';
import { languages, localizePath } from './Utils';

const ActionButtons = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SpeedDial
        ariaLabel="Language"
        icon={<LanguageIcon />}
        direction={'down'}
        FabProps={{
          sx: {
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.light',
            },
            transition: 'background-color 300ms ease-in-out !important',
            // added !important to overwrite the theme transition
          },
        }}
      >
        {languages.map((language) => (
          <SpeedDialAction
            sx={{
              bgcolor: 'secondary.main',
              '&:hover': {
                backgroundColor: 'secondary.light',
              },
              transition: 'all 300ms ease-in-out',
            }}
            key={language.locale}
            icon={
              <Link
                href={localizePath('/', language.locale)}
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
  );
};

export default ActionButtons;
