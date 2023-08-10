import { css } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const wrapperStyles = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const NonExistingPage = () => {
  const { t } = useTranslation();

  return (
    <div css={wrapperStyles}>
      <img
        alt=""
        src="https://res.cloudinary.com/dlyw63h5s/image/upload/v1690688449/oops_i6auec.png"
      />
      <div className="no-page-text">{t('noPage')}</div>
    </div>
  );
};

export { NonExistingPage };
