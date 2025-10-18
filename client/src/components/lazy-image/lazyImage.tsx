import React, { useEffect, useRef, useState } from 'react';

import { imageStyles } from './lazyImage.styles';
import { ILazyImage } from './lazyImage.types';

const LazyImage = ({ image, smallImage, onClick }: ILazyImage) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (ref.current?.complete) {
        setLoaded(true);
      } else {
        ref.current.addEventListener('load', () => setLoaded(true));
      }
    }
  }, [ref?.current?.complete]);

  return (
    <div css={imageStyles(smallImage)}>
      <img
        alt="Project screenshot"
        className={`carousel-image ${loaded ? 'loaded' : ''}`}
        loading="lazy"
        ref={ref}
        src={image}
        onClick={loaded ? onClick(image) : null}
      />
    </div>
  );
};

export { LazyImage };
