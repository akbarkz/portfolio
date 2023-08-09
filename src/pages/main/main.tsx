import React from 'react';
import { useTranslation } from 'react-i18next';

import { wrapperStyles } from './main.styles';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div css={wrapperStyles}>
      <h2>{t('main.greeting')} &#128075;</h2>
      <h3>{t('main.welcome')}</h3>
      <p>{t('main.text.p1')}</p>
      <p>{t('main.text.p2')}</p>
      <p>{t('main.text.p3')}</p>
      <p>{t('main.text.p4')}</p>
      <p>{t('main.text.p5')}</p>
      <p>{t('main.text.p6')}</p>
    </div>
  );
};

export { Main };
