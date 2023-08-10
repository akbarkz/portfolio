import { Carousel } from 'antd';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbox } from 'react-modal-image';

import { projects } from '@config/projects';
import { formatDate } from '@services/date';

import { projectStyles } from './projects.styles';

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
            {project.name}&nbsp;<div className="location">({t(project.location)})</div>
          </div>
          <div className="position">{t(project.position)}</div>
          <div className="dates">
            {formatDate(project.dateStart, i18n.language)} -{' '}
            {formatDate(project.dateEnd, i18n.language)}
          </div>
          <div className="link">
            <a href={project.link} target="_blank">
              {project.link}
            </a>
          </div>
          <div className="stack">
            {t('stack')}:
            {project.stack.map((tech) => (
              <a
                className="stack-tech"
                key={`${project.name}-${tech.name}`}
                href={tech.link}
                target="_blank"
              >
                <img alt={tech.name} src={tech.icon} title={tech.name} width={24} />
              </a>
            ))}
          </div>
          <div className="project-details">
            <div>
              <div className="description">
                {project.description?.map((descr) => (
                  <p key={descr}>{t(descr)}</p>
                ))}
              </div>
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
                {project.images.map((image) => (
                  <img
                    className="carousel-image"
                    key={image}
                    src={image}
                    onClick={handleImageClick(image)}
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
