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

interface Props {
  pathname: string;
}

const ActionButtons = (props: Props): React.ReactElement => {
  const filename = props.pathname.substring(props.pathname.lastIndexOf('/'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

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
  );
};

export default ActionButtons;
