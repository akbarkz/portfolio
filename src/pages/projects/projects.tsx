import { Carousel, Typography } from 'antd';
import Link from 'antd/es/typography/Link';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbox } from 'react-modal-image';

import { LazyImage } from '@components/lazy-image';
import { projects } from '@config/projects';
import { formatDate } from '@services/date';

import { projectStyles } from './projects.styles';

const { Paragraph } = Typography;

const Projects = () => {
  const { t, i18n } = useTranslation();

  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = useCallback(
    (image: string) => () => {
      setCurrentImage(image);
    },
    []
  );

  const handleCloseImage = useCallback(() => {
    setCurrentImage(null);
  }, []);

  return (
    <>
      {projects.map((project, index) => (
        <div css={projectStyles(index)} key={`${project.name}-${project.dateStart.toString()}`}>
          <div className="name">
            {project.name}&nbsp;<span className="location">({t(project.location)})</span>
          </div>
          <div className="position">{t(project.position)}</div>
          <div className="dates">
            {`${formatDate(project.dateStart, i18n.language)} -
            ${formatDate(project.dateEnd, i18n.language)}`}
          </div>
          <div className="link">
            <Link href={project.link} rel="noreferrer" target="_blank">
              {project.link}
            </Link>
          </div>
          <div className="stack">
            {t('stack')}:
            {project.stack.map((tech) => (
              <Link
                className="stack-tech"
                key={`${project.name}-${tech.name}`}
                href={tech.link}
                rel="noreferrer"
                target="_blank"
              >
                <img alt={tech.name} src={tech.icon} title={tech.name} width={24} />
              </Link>
            ))}
          </div>
          <div className="project-details">
            <div>
              {project.description && (
                <Paragraph
                  className="description"
                  ellipsis={{ rows: 2, expandable: true, symbol: t('more') }}
                >
                  {project.description.map((descr) => (
                    <React.Fragment key={descr}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {t(descr)}
                      <br />
                    </React.Fragment>
                  ))}
                </Paragraph>
              )}
              {project.achievements && (
                <div className="achievements">
                  {t('achievements.title')}:
                  <ul>
                    {project.achievements.map((achieve) => (
                      <li className="achievements-item" key={achieve}>
                        {t(achieve)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {project.images && (
              <Carousel autoplay className="carousel">
                {project.images.map((image, index) => (
                  <LazyImage
                    key={image}
                    image={image}
                    smallImage={project.smallImages?.[index]}
                    onClick={handleImageClick}
                  />
                ))}
              </Carousel>
            )}
          </div>
        </div>
      ))}
      {currentImage && <Lightbox medium={currentImage} onClose={handleCloseImage} />}
    </>
  );
};

export { Projects };
