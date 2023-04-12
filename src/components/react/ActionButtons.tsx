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
