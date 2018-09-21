import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ImgWrapper, Name } from './Character.styles';

class Character extends React.Component {
  constructor(props) {
    super(props);
    if (typeof document !== 'undefined') {
      this.imageRef = React.createRef();
    }

    const { slug, gameSlug } = props;

    // eslint-disable-next-line
    // this.charSrc = require(`../../assets/img/chars/${gameSlug}/${slug}.png`);
    this.charSrc = `/img/chars/${gameSlug}/${slug}.png`;
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
    const { name, color } = this.props;

    const { loaded } = this.state;

    return (
      <Wrapper itemProp="character" itemScope itemType="http://schema.org/Person">
        <ImgWrapper>
          <img
            ref={this.imageRef}
            className={loaded ? 'loaded' : 'loading'}
            src={this.charSrc}
            alt={name}
            itemProp="image"
          />
        </ImgWrapper>
        <Name color={color} className={name.length > 11 ? 'is-large' : ''}>
          <span itemProp="name">{name}</span>
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
