import React, { Component } from 'react';
import { HashRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageTitle from './pages/PageTitle';
import PageDetailsTypeA from './pages/PageDetails/TypeA';
import PageDetailsTypeB from './pages/PageDetails/TypeB';
import PageDetailsTypeC from './pages/PageDetails/TypeC';
import PageDetailsTypeD from './pages/PageDetails/TypeD';
import Nav from './components/Nav';
import Renderer from './components/Renderer';
import history from './history';
import config from './config';
import { slideRight, slideLeft, slideUp, slideDown, animateCount, pageEnterAnimation, pageExitAnimation } from './scripts/utils';

class AppRouter extends Component {

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
    // console.log(node)
    if (!node) return;
    const { forward } = this.props;
    pageExitAnimation(node, forward)
  };

  onEntering = (node) => {
    if (!node) return;
    const { forward } = this.props;
    pageEnterAnimation(node, forward, this.handleComplete);
  };

  render() {
    const { forward, handleNavigate } = this.props;
    return (
      <HashRouter 
      >
        <Route
          render={({ location }) => {
            return (
              <div className="app-wrapper">
              <Nav handleNavigate={handleNavigate} location={location}/>
              <TransitionGroup>
                <CSSTransition
                  timeout={1000}
                  classNames="transition"
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
              </div>
            );
          }}
        />
      </HashRouter>
    );
  }
}

export default AppRouter;
