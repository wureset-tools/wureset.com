import i18next, { t } from 'i18next';
import React from 'react';

import { localizePath, paths, resolveLanguage } from './Utils';

const lang = resolveLanguage(i18next.language);

const Buttons = (): React.ReactElement => {
  return (
    <>
      {paths.map((path) => (
        <a
          href={localizePath(path.route, lang)}
          key={path.name}
          className="bg-indigo-main hover:bg-indigo-light inline-flex h-16 items-center rounded-none px-6"
        >
          {t('navbar.' + path.name)}
        </a>
      ))}
    </>
  );
};

export default Buttons;
