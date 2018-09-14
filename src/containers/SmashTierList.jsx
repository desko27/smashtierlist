import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-static';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

import store from '../redux/store';

import { Wrapper } from './SmashTierList.styles';

import gamesData from '../games-data';
import { selectGame } from '../redux/app/actions';
import { addGame, filterByName } from '../redux/game/actions';
import { currentGameSelector, prevGameSelector, nextGameSelector } from '../redux/app/selectors';

import Header from '../components/layout/Header';
import {
  theme as headerTheme,
  InnerHeaderSecondLine,
  OuterHeaderSecondLine,
} from '../components/layout/Header.styles';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';
import { FooterLine, SocialIcons, FooterSeparator } from '../components/layout/Footer.styles';

import SuperTitle from '../components/SuperTitle';
import GameSelect from '../components/GameSelect';
import Filter from '../components/Filter';
import HeaderIcon from '../components/HeaderIcon';

import Game from './Game';

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
    const {
      currentFilter,
      currentGame,
      prevGame,
      nextGame,
    } = this.props;

    const HeaderSecondLine = TheWrapper => (
      <TheWrapper className={secondLineStuck ? 'stuck' : ''}>
        <Filter onChange={this.onFilterChange} value={currentFilter} />
        <HeaderIcon
          svgPath="/svg/book.svg"
          alt="Smash Wiki"
          url="https://www.ssbwiki.com/tier_list"
        />
        <HeaderIcon
          svgPath="/svg/github.svg"
          alt="Soruce on GitHub"
          url="https://github.com/desko27/smash-tier-list"
        />
      </TheWrapper>
    );

    return (
      <Wrapper>
        <script
          id="redux"
          dangerouslySetInnerHTML={ // eslint-disable-line
            // send redux state to the client!
            { __html: `window.__REDUX_STATE__ = ${JSON.stringify(this.firstReduxState)}` }
          }
        />
        <Header className={headerStuck ? 'stuck' : ''}>
          <SuperTitle>Super Smash Bros.</SuperTitle>
          <GameSelect
            gameTitle={
              typeof document !== 'undefined'
                ? currentGame.shortName : currentGameSelector(this.firstReduxState).shortName
            }
            prevGameRoute={
              typeof document !== 'undefined'
                ? prevGame.route : prevGameSelector(this.firstReduxState).route
            }
            nextGameRoute={
              typeof document !== 'undefined'
                ? nextGame.route : nextGameSelector(this.firstReduxState).route
            }
          />
          {HeaderSecondLine(InnerHeaderSecondLine)}
        </Header>
        {HeaderSecondLine(OuterHeaderSecondLine)}
        <Main>
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
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/desko27">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/desko27">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/desko27">
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
      </Wrapper>
    );
  }
}

SmashTierList.propTypes = {
  history: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentGame: PropTypes.object.isRequired,
  prevGame: PropTypes.object.isRequired,
  nextGame: PropTypes.object.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default withRouter(
  connect(
    state => ({
      title: state.title,
      currentGame: currentGameSelector(state),
      prevGame: prevGameSelector(state),
      nextGame: nextGameSelector(state),
      currentFilter: state.currentFilter,
    }),
  )(SmashTierList),
);
