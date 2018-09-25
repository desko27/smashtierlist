import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, withSiteData, Head } from 'react-static';
import ReactGA from 'react-ga';

import store from '../store';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

import bookSrc from 'assets/svg/book.svg';
import githubSrc from 'assets/svg/github.svg';

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


let initialStoreState;

// environment vars
const env = process.env.REACT_STATIC_ENV;

// init google analytics
if (typeof document !== 'undefined' && env === 'production') {
  ReactGA.initialize('UA-69148909-3');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class SmashTierList extends React.Component {
  constructor(props) {
    super()

    props.history.listen(({ pathname }) => {
      store.update({
        currentGameIndex: store.state.games.findIndex(g => g.route == pathname.slice(1))
      })

      // register further navigation via google analytics
      if (typeof document !== 'undefined' && env === 'production') {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
    });
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
    store.update({currentFilter: e.target.value})
  }

  render() {
    const { route } = this.props;
    const { headerStuck, secondLineStuck } = this.state;
    const { siteTitle, currentFilter, currentGameIndex, games } = store.state;

    let index = games.findIndex(g => g.route == route.slice(1))
    if (index == -1) index = currentGameIndex

    const currentGame  = games[index]
    const prevGame     = games[index <= 0 ? games.length-1 : index-1]
    const nextGame     = games[index >= games.length-1 ? 0 : index+1]

    const fullTitle = `${siteTitle} - ${currentGame.name}`;

    if (!initialStoreState) {
      initialStoreState = {
        ...store.state,
        currentGameIndex: index
      }
    }


    const HeaderSecondLine = TheWrapper => (
      <TheWrapper className={secondLineStuck ? 'stuck' : ''}>
        <Filter onChange={this.onFilterChange} value={currentFilter} />
        <HeaderIcon
          svgPath={bookSrc}
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
        </Head>
        <Header className={headerStuck ? 'stuck' : ''}>
          <SuperTitle>{siteTitle}.</SuperTitle>
          <GameSelect currentGame={currentGame} prevGame={prevGame} nextGame={nextGame} />
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
            { __html: `window.__PURE_STORE_STATE__ = ${JSON.stringify(initialStoreState)}` }
          }
        />
      </Wrapper>
    );
  }
}

SmashTierList.propTypes = {
  route: PropTypes.string.isRequired
};

// export default withSiteData(withRouter(SmashTierList));
export default withRouter(SmashTierList);
