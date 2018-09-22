import { createBrowserHistory } from 'history';

let history; // eslint-disable-line
if (typeof document !== 'undefined') {
  history = createBrowserHistory();
}

export default history;
