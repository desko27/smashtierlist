import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <main>
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
