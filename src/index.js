import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// export top level component as jsx (for static rendering)
export default App;

// render the app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Comp) => {
    // eslint-disable-next-line
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // render!
  render(App);
}
