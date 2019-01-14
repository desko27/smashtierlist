import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter, withSiteData, Head } from 'react-static';
import ReactGA from 'react-ga';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

import exclamationCircleSrc from 'assets/svg/exclamation-circle.svg';
import githubSrc from 'assets/svg/github.svg';

// redux stuff
import store from '../redux/store';
import gamesData from '../games-data';
import { selectGame } from '../redux/app/actions';
import { addGame, filterByName } from '../redux/game/actions';
import { currentGameSelector, prevGameSelector, nextGameSelector } from '../redux/app/selectors';

// layout components & styles
import { Wrapper } from './SmashTierList.styles';
import Header from '../components/layout/Header';
import {
  theme as headerTheme,
  InnerHeaderSecondLine,
  OuterHeaderSecondLine,
} from '../components/layout/Header.styles';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';
import { FooterLine, SocialIcons, FooterSeparator } from '../components/layout/Footer.styles';

// ui pieces
import SuperTitle from '../components/SuperTitle';
import GameSelect from '../components/GameSelect';
import Filter from '../components/Filter';
import HeaderIcon from '../components/HeaderIcon';
import Game from './Game';
import Notices from './Notices';


// environment vars
const env = process.env.REACT_STATIC_ENV;

// init google analytics
if (typeof document !== 'undefined' && env === 'production') {
  ReactGA.initialize('UA-69148909-3');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// add all the games to the redux store
if (store.getState().games.length === 0) {
  gamesData.forEach(game => store.dispatch(addGame(game)));
}

class SmashTierList extends React.Component {
  constructor(props) {
    super();
    const {
      dispatch,
      currentGame,
      history,
      route,
    } = props;

    // get the raw route
    const getCleanRoute = rr => rr.slice(1);

    // go to the requested game based on the current path and reapply current filter
    const goToRequestedGame = (rr) => {
      dispatch(selectGame('route', getCleanRoute(rr)));
      dispatch(filterByName(store.getState().currentFilter));
    };

    // prepare listener for future requests
    history.listen(({ pathname }) => {
      goToRequestedGame(pathname);

      // register further navigation via google analytics
      if (typeof document !== 'undefined' && env === 'production') {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
    });

    // root url should fallback to 'currentGame'
    if (route === '/') history.push(`/${currentGame.route}`);

    // go to it for the first time only if game actually exists
    if (gamesData.find(g => g.route === getCleanRoute(route))) {
      goToRequestedGame(route);
    }

    // save the current redux state for ssr
    this.firstReduxState = store.getState();
  }

  state = {
    headerStuck: false,
    secondLineStuck: false,
  };

  componentDidMount = () => {
    window.onscroll = () => {
      const { headerStuck, secondLineStuck } = this.state;
      const currentHeaderStuck = window.scrollY > 0;
      const currentSecondLineStuck = window.scrollY > 30 + 10 + headerTheme.height;

      // don't do unnecessary renders
      if (headerStuck === currentHeaderStuck && secondLineStuck === currentSecondLineStuck) {
        return;
      }

      this.setState({
        headerStuck: currentHeaderStuck,
        secondLineStuck: currentSecondLineStuck,
      });
    };
  }

  onFilterChange = (e) => {
    const { dispatch } = this.props;
    dispatch(filterByName(e.target.value));
  }

  render() {
    const { headerStuck, secondLineStuck } = this.state;
    let { currentGame, prevGame, nextGame } = this.props;
    const {
      siteTitle,
      siteRoot,
      route,
      currentFilter,
    } = this.props;

    const isBrowser = typeof document !== 'undefined';
    currentGame = isBrowser ? currentGame : currentGameSelector(this.firstReduxState);
    prevGame = isBrowser ? prevGame : prevGameSelector(this.firstReduxState);
    nextGame = isBrowser ? nextGame : nextGameSelector(this.firstReduxState);

    const fullTitle = `${siteTitle} - ${currentGame.name}`;

    const HeaderSecondLine = TheWrapper => (
      <TheWrapper className={secondLineStuck ? 'stuck' : ''}>
        <Filter onChange={this.onFilterChange} value={currentFilter} />
        <HeaderIcon
          svgPath={exclamationCircleSrc}
          alt="Smash Wiki"
          url="https://www.ssbwiki.com/tier_list"
        />
        <HeaderIcon
          svgPath={githubSrc}
          alt="Source on GitHub"
          url="https://github.com/desko27/smash-tier-list"
        />
      </TheWrapper>
    );

    return (
      <Wrapper>
        <Head>
          <title>{fullTitle}</title>
          <meta property="og:title" content={fullTitle} />
          <meta property="og:url" content={`${siteRoot}${route}`} />
          <meta name="twitter:title" content={fullTitle} />
          <meta name="twitter:url" content={`${siteRoot}${route}`} />
        </Head>
        <Header className={headerStuck ? 'stuck' : ''}>
          <SuperTitle>{siteTitle}.</SuperTitle>
          <GameSelect currentGame={currentGame} prevGame={prevGame} nextGame={nextGame} />
          {HeaderSecondLine(InnerHeaderSecondLine)}
        </Header>
        {HeaderSecondLine(OuterHeaderSecondLine)}
        <Main>
          <Notices />
          <Game />
        </Main>
        <Footer>
          <FooterLine>
            <span>Made with</span>
            <span>
              <strong><FontAwesomeIcon icon={faHeart} /></strong>
            </span>
            <span>by</span>
            <span><strong>desko27</strong></span>
          </FooterLine>
          <FooterSeparator />
          <SocialIcons>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/desko27"
              title="Desko27's LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/desko27"
              title="Desko27's Twitter"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/desko27"
              title="Desko27's GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </SocialIcons>
          <FooterSeparator />
          <FooterLine>
            <span>Powered by</span>
            <span>
              <strong><FontAwesomeIcon icon={faReact} size="lg" /></strong>
            </span>
            <span>React</span>
          </FooterLine>
        </Footer>
        <script
          id="redux"
          dangerouslySetInnerHTML={ // eslint-disable-line
            // send redux state to the client!
            { __html: `window.__REDUX_STATE__ = ${JSON.stringify(this.firstReduxState)}` }
          }
        />
      </Wrapper>
    );
  }
}

SmashTierList.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteRoot: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentGame: PropTypes.object.isRequired,
  prevGame: PropTypes.object.isRequired,
  nextGame: PropTypes.object.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default withSiteData(withRouter(
  connect(
    state => ({
      title: state.title,
      currentGame: currentGameSelector(state),
      prevGame: prevGameSelector(state),
      nextGame: nextGameSelector(state),
      currentFilter: state.currentFilter,
    }),
  )(SmashTierList),
));
