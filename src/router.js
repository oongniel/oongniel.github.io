import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PageTitle from "./pages/PageTitle";
import PageDetailsTypeA from "./pages/PageDetails/TypeA";
import PageDetailsTypeB from "./pages/PageDetails/TypeB";
import PageDetailsTypeC from "./pages/PageDetails/TypeC";
import PageDetailsTypeD from "./pages/PageDetails/TypeD";
import history from "./history";
import config from "./config";
class AppRouter extends Component {
  getTemplate = (template, params) => {
    switch (template) {
      case "page-title":
        return <PageTitle params={params} />;
      case "page-details-a":
        return <PageDetailsTypeA params={params} />;
      case "page-details-b":
        return <PageDetailsTypeB params={params} />;
      case "page-details-c":
        return <PageDetailsTypeC params={params} />;
      case "page-details-d":
        return <PageDetailsTypeD params={params} />;
      default:
        break;
    }
  };
  render() {
    return (
      <Router history={history}>
        {/* <Route
          render={location => {
            return (
              <TransitionGroup>
                <CSSTransition
                  timeout={500}
                  classNames="fade"
                  key={location.location.key}
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
        /> */}
        <Switch>
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
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
