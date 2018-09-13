import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ImgWrapper, Name } from './Character.styles';

class Character extends React.Component {
  constructor() {
    super();
    if (typeof document !== 'undefined') {
      this.imageRef = React.createRef();
    }
  }

  state = { loaded: false };

  componentDidMount() {
    const image = this.imageRef.current;
    if (image) {
      if (image.complete) {
        this.handleImageLoaded();
      } else {
        image.onload = this.handleImageLoaded;
      }
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const {
      name,
      color,
      slug,
      gameSlug,
    } = this.props;

    const { loaded } = this.state;

    return (
      <Wrapper>
        <ImgWrapper>
          <img
            ref={this.imageRef}
            className={loaded ? 'loaded' : 'loading'}
            src={`/img/chars/${gameSlug}/${slug}.png`}
            alt={name}
          />
        </ImgWrapper>
        <Name color={color} className={name.length > 11 ? 'is-large' : ''}>
          <span>{name}</span>
        </Name>
      </Wrapper>
    );
  }
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
};

export default Character;
