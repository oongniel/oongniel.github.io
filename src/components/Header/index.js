import React, { Component } from 'react';
import history from '../../history';
import { reverseAllTweens, getRouteList } from '../../scripts/utils';
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

  checkIfActive = () => {
    getRouteList(list => {
      console.log(list, history.location.pathname);
    });
  };
  render() {
    const { dark } = this.props;
    console.log(history);
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
                  item.link === history.location.pathname ? 'active' : ''
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
