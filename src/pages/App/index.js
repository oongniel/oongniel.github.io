import React, { Component } from 'react';
import Router from '../../router';
import history from '../../history';
import config from '../../config';
import { reverseTweens } from '../../scripts/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
    };
  }
  componentDidMount() {
    this.getRouteList();

    document.addEventListener('keydown', event => {
      // const keyName = event.key;
      const keyCode = event.which;
      let page = history.location.pathname.substr(1);
      page = Number(page) || page;
      const { routeList } = this.state;
      const pageIndex = routeList.indexOf(page);
      const delay = 800;
      switch (keyCode) {
        case 37:
        case 38:
          if (page === 1) {
            return false;
          }
            this.handleReverseAnimate()
            setTimeout(() => {
              history.push(`/${routeList[pageIndex - 1]}`);
            }, delay);
          break;
        case 39:
        case 40:
          if (page >= config.length) {
            return false;
          }
            this.handleReverseAnimate()
            setTimeout(() => {
              history.push(`/${routeList[pageIndex + 1]}`);
            }, delay);
          break;
        default:
          return false;
      }
    });
  }
  handleReverseAnimate = () => {
    reverseTweens('slideLeftTween');
    reverseTweens('slideRightTween');
    reverseTweens('slideUpTween');
    reverseTweens('slideDownTween');
    reverseTweens('titleTween')
  };

  getRouteList = () => {
    const list = config.map((item, index) => {
      return item.route ? item.route : index + 1;
    });
    this.setState({ routeList: list });
  };
  render() {
    return (
      <div className="page-main ">
        <Router />
      </div>
    );
  }
}

export default App;
