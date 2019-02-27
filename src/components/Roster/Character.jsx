import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import srcS3 from 'common/src-s3';

import {
  Wrapper,
  ImgWrapper,
  Name,
  LoadingBar,
} from './Character.styles';

const LOADING_THRESHOLD = 500;

function Character({
  name,
  color,
  slug,
  gameSlug,
  visible,
}) {
  const charSrcs = {
    /* eslint-disable import/no-dynamic-require, global-require */
    png: srcS3(require(`assets/img/chars/${gameSlug}/${slug}.png.150.png`)),
    webp: srcS3(require(`assets/img/chars/${gameSlug}/${slug}.png.150.png.webp`)),
  };

  const start = useRef(); // check elapsed time for loading threshold
  const imageRef = typeof document !== 'undefined' ? useRef() : null;

  // 'loaded' states: yes | no | early
  const [loaded, setLoaded] = useState('no');

  const handleImageLoaded = () => {
    const now = new Date();
    if (now - start.current > LOADING_THRESHOLD) {
      setLoaded('yes');
    } else {
      setLoaded('early');
    }
  };

  useEffect(() => {
    start.current = new Date();

    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        handleImageLoaded();
      } else {
        image.onload = handleImageLoaded;
      }
    }

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <Wrapper
      visible={visible}
      itemProp="character"
      itemScope
      itemType="http://schema.org/Person"
    >
      <ImgWrapper>
        <picture>
          <source srcSet={charSrcs.webp} type="image/webp" />
          <img
            itemProp="image"
            className={
              // eslint-disable-next-line
              loaded === 'early' ?
                'early-loaded' : (loaded === 'no' ? 'loading' : 'loaded')
            }
            ref={imageRef}
            src={charSrcs.png}
            alt={name}
          />
        </picture>
        {loaded === 'no' ? (
          <LoadingBar className="loading-bar">
            <div>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </LoadingBar>
        ) : ''}
      </ImgWrapper>
      <Name color={color} className={name.length > 11 ? 'is-large' : ''}>
        <span itemProp="name">{name}</span>
      </Name>
    </Wrapper>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Character;
