import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from 'store';

import { currentGameSelector } from '../redux/app/selectors';

import Notice from '../components/Notice';

import { Wrapper } from './Notices.styles';

const getNoticeKey = ({ slug, id }) => `${slug}-${id}`;

class Notices extends Component {
  handleCloseNotice = (noticeId) => {
    const { currentGame } = this.props;
    store.set(getNoticeKey({ slug: currentGame.slug, id: noticeId }), true);
    this.forceUpdate();
  }

  render() {
    const { currentGame, showAll } = this.props;
    const isServer = typeof document === 'undefined';

    return (
      <Wrapper>
        {
          currentGame.notices
            .filter(({ id }) => (
              isServer || showAll || !store.get(getNoticeKey({ slug: currentGame.slug, id }))
            ))
            .map(({ id, message }) => (
              <Notice
                key={id}
                onClose={() => this.handleCloseNotice(id)}
                hideCloseButton={showAll}
              >
                {
                  // message with target="_blank" attribute at any link
                  message.replace(/<a /g, '<a target="_blank" ')
                }
              </Notice>
            ))
        }
      </Wrapper>
    );
  }
}

Notices.propTypes = {
  showAll: PropTypes.bool.isRequired,
  currentGame: PropTypes.object.isRequired,
};

export default connect(
  state => ({ currentGame: currentGameSelector(state) }),
)(Notices);
