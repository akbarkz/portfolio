import { Col, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { education } from '@config/education';
import { formatDate } from '@services/date';

import { wrapperStyles } from './education.styles';

const Education = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {education.map((edu) => (
        <Row css={wrapperStyles} key={edu.universityName} gutter={16}>
          <Col xs={24} sm={4}>
            <img alt="University logo" className="logo" src={edu.logo} />
          </Col>
          <Col xs={24} sm={20}>
            <div className="university-name">
              {edu.universityName}&nbsp;<span className="location">({t(edu.location)})</span>
            </div>
            <div className="degree">{`${t(edu.degree)}, ${t(edu.specialty)}`}</div>
            <div className="period">{`${formatDate(
              edu.dateStart,
              i18n.language,
              true
            )} - ${formatDate(edu.dateEnd, i18n.language, true)}`}</div>
            <div className="link">
              <Link href={edu.link} target="_blank" rel="noreferrer">
                {edu.link}
              </Link>
            </div>
            <div className="thesis">
              {t('education.thesis.title')}:{' '}
              <span className="thesis-name">
                {edu.thesisLink ? (
                  <Link
                    className="thesis-name-link"
                    href={edu.thesisLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t(edu.thesisName)}
                  </Link>
                ) : (
                  t(edu.thesisName)
                )}
              </span>
            </div>
            {edu.description?.map((descr) => (
              <p className="description" key={descr}>
                {t(descr)}
              </p>
            ))}
          </Col>
        </Row>
      ))}
    </>
  );
};

export { Education };
