import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TweenLite, TweenMax } from "gsap";
import PageTitle from "./pages/PageTitle";
import PageDetailsTypeA from "./pages/PageDetails/TypeA";
import PageDetailsTypeB from "./pages/PageDetails/TypeB";
import PageDetailsTypeC from "./pages/PageDetails/TypeC";
import PageDetailsTypeD from "./pages/PageDetails/TypeD";
import Renderer from "./components/Renderer";
import history from "./history";
import config from "./config";
class AppRouter extends Component {
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
    TweenLite.set(target, {
      clearProps: "position, width, transform"
    });
    console.log("Page enter Complete");
  };

  onExiting = node => {
    if (!node) return;
    // Cancel existing animations
    TweenMax.killTweensOf(node);
    const { parentNode } = node;
    const targetWidth =
      parentNode.clientWidth -
      parseFloat(getComputedStyle(parentNode).paddingLeft) * 2;
    // Set element position
    TweenLite.set(node, {
      position: "fixed",
      x: 0,
      width: targetWidth
    });
    // Animate element
    TweenLite.to(node, 0.5, {
      force3D: true,
      scale: 0,
      position: "fixed",
      opacity: 0,
      x: -100,
      y: -100,
      // I put this in here to force you to consider it as a hook
      onComplete: () => console.log("Page exit complete.")
    });
  };

  onEntering = (node, isAppearing) => {
    if (!node) return;
    // Cancel existing animations
    TweenMax.killTweensOf(node);
    const { parentNode } = node;
    const targetWidth =
      parentNode.clientWidth -
      parseFloat(getComputedStyle(parentNode).paddingLeft) * 2;
    console.log(targetWidth);
    // Set element position
    TweenLite.set(node, {
      position: "fixed",
      scale: 0,
      x: 0,
      autoAlpha: 0,
      width: 0
    });
    // Animate element
    TweenLite.to(node, 0.5, {
      force3D: true,
      scale: 1,
      autoAlpha: 1,
      x: 0,
      y: 0,
      width: targetWidth,
      onComplete: this.handleComplete, // Fire this when animation finishes
      onCompleteParams: [node]
    });
  };

  render() {
    return (
      <Router history={history}>
        <Route
          render={location => {
            return (
              <TransitionGroup>
                <CSSTransition
                  timeout={1000}
                  classNames="transition-"
                  key={location.location.key}
                  onExit={node => this.onExiting(node)}
                  onEnter={(node, isAppearing) => {
                    this.onEntering(node, isAppearing);
                  }}
                >
                  <Switch location={location.location}>
                    {config.map((item, index) => {
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
