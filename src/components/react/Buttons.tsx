import { Button } from '@mui/material';
import i18next, { t } from 'i18next';
import React from 'react';

import { localizePath, paths, resolveLanguage } from './Utils';

const lang = resolveLanguage(i18next.language);

const Buttons = (): React.ReactElement => {
  return (
    <>
      {paths.map((path) => (
        <Button
          color="inherit"
          component="a"
          href={localizePath(path.route, lang)}
          key={path.name}
          className="hover:bg-indigo-light h-16 rounded-none"
        >
          {t('navbar.' + path.name)}
        </Button>
      ))}
    </>
  );
};

export default Buttons;
