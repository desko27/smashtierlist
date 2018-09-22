import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  ImgWrapper,
  Name,
  LoadingBar,
} from './Character.styles';

const LOADING_THRESHOLD = 500;

class Character extends React.Component {
  constructor(props) {
    super(props);
    if (typeof document !== 'undefined') {
      this.imageRef = React.createRef();
    }

    const { slug, gameSlug } = props;

    // eslint-disable-next-line
    this.charSrc = require(`../../assets/img/chars/${gameSlug}/${slug}.png`).src;

    // check elapsed time for loading threshold
    this.start = new Date();
  }

  // states: yes | no | early
  state = { loaded: 'no' };

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
    const now = new Date();
    if (now - this.start > LOADING_THRESHOLD) {
      this.setState({ loaded: 'yes' });
    } else {
      this.setState({ loaded: 'early' });
    }
  }

  render() {
    const { name, color } = this.props;

    const { loaded } = this.state;

    return (
      <Wrapper itemProp="character" itemScope itemType="http://schema.org/Person">
        <ImgWrapper>
          <img
            ref={this.imageRef}
            className={
              // eslint-disable-next-line
              loaded === 'early' ?
                'early-loaded' : (loaded === 'no' ? 'loading' : 'loaded')
            }
            src={this.charSrc}
            alt={name}
            itemProp="image"
          />
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
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
};

export default Character;
