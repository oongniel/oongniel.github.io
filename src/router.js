import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TweenLite, TweenMax, Power2 } from "gsap";
import PageTitle from "./pages/PageTitle";
import PageDetailsTypeA from "./pages/PageDetails/TypeA";
import PageDetailsTypeB from "./pages/PageDetails/TypeB";
import PageDetailsTypeC from "./pages/PageDetails/TypeC";
import PageDetailsTypeD from "./pages/PageDetails/TypeD";
import Renderer from "./components/Renderer";
import history from "./history";
import config from "./config";
import { animateHeader, animateCount } from "./scripts/utils";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
      forward: true,
      mounted: false,
      node: null
    };
  }
  componentDidMount() {
    this.getRouteList();
    // setTimeout(() => {
    //   this.initAnimate();
    // }, 500);

    document.addEventListener("keydown", event => {
      // const keyName = event.key;
      const keyCode = event.which;
      let page = history.location.pathname.substr(1);
      page = Number(page) || page;
      const { routeList } = this.state;
      const pageIndex = routeList.indexOf(page);

      switch (keyCode) {
        case 37:
        case 38:
          if (page === 1) {
            return false;
          }
          this.setState({ forward: false });
          history.push(`/${routeList[pageIndex - 1]}`);
          break;
        case 39:
        case 40:
          if (page >= config.length) {
            return false;
          }
          this.setState({ forward: true });
          history.push(`/${routeList[pageIndex + 1]}`);
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
      case "page-title":
        temp = <PageTitle params={params} />;
        break;
      case "page-details-a":
        temp = <PageDetailsTypeA params={params} />;
        break;
      case "page-details-b":
        temp = <PageDetailsTypeB params={params} />;
        break;
      case "page-details-c":
        temp = <PageDetailsTypeC params={params} />;
        break;
      case "page-details-d":
        temp = <PageDetailsTypeD params={params} />;
        break;
      default:
        break;
    }
    return <Renderer>{temp}</Renderer>;
  };

  handleComplete = target => {
    TweenLite.set(target, { clearProps: "all" });
    this.initAnimate();
  };

  initAnimate = () => {
    animateHeader();
    animateCount();
    window.AOS.init();
    console.log("init");
  };

  onExiting = node => {
    if (!node) return;
    const { forward } = this.state;
    // Kill animation
    TweenMax.killTweensOf(node);
    // TweenLite.killTweensOf(node);
    // TweenLite.to(node, 0.6, { xPercent: this.state.forward ? -100 : 100 });
    // TweenLite.set(node, { scale: 0.3 });
    // TweenLite.to(node, 0.6, { xPercent: forward ? -80 : 50 });
    TweenLite.fromTo(
      node,
      0.6,
      {
        opacity: 1,
        scale: 1
      },
      {
        opacity: 0,
        scale: 0.8,
        clearProps: "opacity, scale",
        onComplete: function() {
          // removeClass(el, ['is-onTop', 'is-current']);
          console.log("exiting");
        }
      }
    );
  };

  onEntering = (node, isAppearing) => {
    if (!node) return;
    const { forward } = this.state;
    // Kill animation
    TweenMax.killTweensOf(node);
    TweenLite.set(node, {
      scale: 0.5,
      xPercent: forward ? 50 : -50,
      opacity: 0.5
    });
    TweenLite.to(node, 0.5, {
      xPercent: 0,
      opacity: 1
    });
    TweenLite.to(node, 0.9, {
      scale: 1,
      onComplete: this.handleComplete,
      onCompleteParams: [node]
    }).delay(0.5);
    // TweenLite.set(node, {
    //   visibility: "visible",
    //   xPercent: this.state.forward ? 100 : -100,
    //   position: "fixed",
    //   left: 0,
    //   top: 0,
    //   right: 0
    // });
    // TweenLite.to(node, 0.6, {
    //   xPercent: 0,
    //   onComplete: this.handleComplete,
    //   onCompleteParams: [node]
    // });
  };

  render() {
    const { forward } = this.state;
    return (
      <Router history={history}>
        <Route
          render={location => {
            console.log(location);
            return (
              <TransitionGroup>
                <CSSTransition
                  timeout={600}
                  classNames="transition"
                  unmountOnExit={true}
                  mountOnEnter={true}
                  appear={true}
                  key={location.location.key}
                  onExit={node => this.onExiting(node)}
                  onEnter={(node, isAppearing) => {
                    this.onEntering(node, isAppearing);
                  }}
                >
                  <Switch location={location.location}>
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
