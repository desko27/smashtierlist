import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useForceUpdate from 'use-force-update';
import posed, { PoseGroup } from 'react-pose';
import storage from 'store';

import { currentGameSelector } from '../redux/app/selectors';

import Notice from '../components/Notice';

import { Wrapper } from './Notices.styles';

const PoseItem = posed.div({
  enter: {
    opacity: 1,
    transform: 'translateX(0vw)',
    height: 'auto',
    marginBottom: '30px',
  },
  exit: {
    opacity: 0,
    transform: 'translateX(50vw)',
    height: '0px',
    marginBottom: '0px',
  },
});

const getNoticeKey = ({ slug, id }) => `${slug}-${id}`;

const Notices = ({ currentGame, showAll }) => {
  const forceUpdate = useForceUpdate();

  const handleCloseNotice = (noticeId) => {
    storage.set(getNoticeKey({ slug: currentGame.slug, id: noticeId }), true);
    forceUpdate();
  };

  const isServer = typeof document === 'undefined';

  return (
    <Wrapper>
      <PoseGroup flipMove={false}>
        {
          currentGame.notices
            .filter(({ id }) => (
              isServer || showAll || !storage.get(getNoticeKey({ slug: currentGame.slug, id }))
            ))
            .map(({ id, message }) => (
              <PoseItem key={id}>
                <Notice
                  onClose={() => handleCloseNotice(id)}
                  hideCloseButton={showAll}
                >
                  {
                    // message with target="_blank" and safe attrs at any link
                    message.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
                  }
                </Notice>
              </PoseItem>
            ))
        }
      </PoseGroup>
    </Wrapper>
  );
};

Notices.propTypes = {
  showAll: PropTypes.bool.isRequired,
  currentGame: PropTypes.object.isRequired,
};

export default connect(
  state => ({ currentGame: currentGameSelector(state) }),
)(Notices);
