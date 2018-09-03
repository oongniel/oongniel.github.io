import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { TweenLite, TweenMax, Power4, TimelineMax } from 'gsap';
import PageTitle from './pages/PageTitle';
import PageDetailsTypeA from './pages/PageDetails/TypeA';
import PageDetailsTypeB from './pages/PageDetails/TypeB';
import PageDetailsTypeC from './pages/PageDetails/TypeC';
import PageDetailsTypeD from './pages/PageDetails/TypeD';
import Renderer from './components/Renderer';
import history from './history';
import config from './config';
import { slideRight, slideLeft, slideUp, slideDown, animateCount } from './scripts/utils';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
      forward: true,
      mounted: false,
      node: null,
    };
  }
  componentDidMount() {
    this.getRouteList();

    document.addEventListener('keydown', event => {
      const keyCode = event.which;
      let page = history.location.pathname.substr(1);
      page = Number(page) || page;
      const delay = 800;
	
      switch (keyCode) {
        case 37:
        case 38:
          if (page === 1) {
            return false;
          }
          setTimeout(() => {
            this.setState({ forward: false });
          }, delay);
          break;
        case 39:
        case 40:
          if (page >= config.length) {
                return false;
          }
          setTimeout(() => {
            this.setState({ forward: true });
          }, delay);
          break;
        default:
          return false;
	  }
    });
  }

  getRouteList = () => {
    const list = config.map((item, index) => {
      return item.route ? item.route : index + 1;
    });
    this.setState({ routeList: list });
  };

  getTemplate = (template, params) => {
    let temp = null;
    switch (template) {
      case 'page-title':
        temp = <PageTitle params={params} />;
        break;
      case 'page-details-a':
        temp = <PageDetailsTypeA params={params} />;
        break;
      case 'page-details-b':
        temp = <PageDetailsTypeB params={params} />;
        break;
      case 'page-details-c':
        temp = <PageDetailsTypeC params={params} />;
        break;
      case 'page-details-d':
        temp = <PageDetailsTypeD params={params} />;
        break;
      default:
        break;
    }
    return <Renderer>{temp}</Renderer>;
  };
  
  handleComplete = target => {
    TweenLite.set(target, { clearProps: 'all' });
    this.initAnimate();
  };

  initAnimate = () => {
    animateCount();
    slideRight();
    slideLeft();
    slideUp();
    slideDown();
  };

  onExiting = node => {
    if (!node) return;
    const { forward } = this.state;
    const tl = new TimelineMax({
      onComplete: () => {
        console.log('exit');
      },
    });

    tl.set(node, {
      xPercent: 0,
      scale: 1,
      transformOrigin: '50% 50%',
    });

    tl.to(node, 0.3, {
      scale: 0.5,
    });

    tl.to(node, 1.5, {
      xPercent: this.state.forward ? -100 : 100,
    });
  };

  onEntering = (node) => {
    if (!node) return;
    const { forward } = this.state;
    // New
    const tl = new TimelineMax({
      onComplete: () => {
        console.log('done enter');
      },
    });

    tl.set(node, {
      scale: 0.5,
      xPercent: forward ? 100 : -100,
      opacity: 0.5,
    });

    tl.to(node, 0.3, {
      xPercent: forward ? 50 : -50,
    });

    tl.to(node, 0.8, {
      xPercent: 0,
      opacity: 1,
    });

    tl.to(node, 1, {
      scale: 1,
      onComplete: this.handleComplete,
      onCompleteParams: [node],
    });
  };

  render() {
    const { forward } = this.state;
    return (
      <Router history={history}>
        {/* <Route exact path="/" render={() => <Redirect to="/1" />} /> */}
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  timeout={1500}
                  classNames="transition"
                  // unmountOnExit={true}
                  // mountOnEnter={true}
                  appear={true}
                  key={location.pathname}
                  onExit={node => this.onExiting(node)}
                  onEnter={(node, isAppearing) => {
                    this.onEntering(node, isAppearing);
                  }}
                >
                  <Switch location={location}>
                    {config.map((item, index) => {
                      item.forward = forward;
                      return (
                        <Route
                          key={index}
                          path={`/${item.route ? item.route : index + 1}`}
                          component={() =>
                            this.getTemplate(item.template, item)
                          }
                        />
                      );
                    })}
                    <Route exact path="/" render={() => <Redirect to="/1" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
        {/* <Switch>
          {config.map((item, index) => {
            return (
              <Route
                key={index}
                path={`/${item.route ? item.route : index + 1}`}
                component={() => this.getTemplate(item.template, item)}
              />
            );
          })}
          <Redirect from="*" to="/1" />
        </Switch> */}
      </Router>
    );
  }
}

export default AppRouter;
