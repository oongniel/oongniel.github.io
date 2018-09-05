import React, { Component } from 'react';
import history from '../../history';
import { reverseAllTweens, getRouteListForNav } from '../../scripts/utils';
import routes from './constants';
class Header extends Component {
  handleNavigate = link => {
    if (link === history.location.pathname) {
      return;
    }
    reverseAllTweens();
    const delay = 800;
    setTimeout(() => {
      history.push(link);
    }, delay);
  };
  componentDidMount() {
    this.checkIfActive("/dubai");
  }
  checkIfActive = (link) => {
    let activeNav = "";
    getRouteListForNav(list => {
      let filtered = list.filter(route => {
        let page = history.location.pathname.substr(1);
        page = Number(page) || page;
        return route.route === page;
      })
      activeNav = filtered[0].activeOn;
    });
    return activeNav;
  };
  render() {
    const { dark } = this.props;
    return (
      <div
        className={`nav ${dark ? 'dark' : ''} slide-down`}
        data-duration="0.8"
      >
        <div className="row">
          {routes.map(item => {
            return (
              <div
                key={item.link}
                className={
                  this.checkIfActive(item.link) === item.link.substr(1) ? 'active' : ''
                }
              >
                <a onClick={this.handleNavigate.bind(this, item.link)}>
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
