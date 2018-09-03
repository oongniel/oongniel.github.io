import React, { Component } from 'react';
import Router from '../../router';
import history from '../../history';
import config from '../../config';
import { reverseAllTweens } from '../../scripts/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
      forward: true
    };
  }
  componentDidMount() {
    this.getRouteList();
    document.addEventListener('keydown', event => {
      const keyCode = event.which;
      this.handleNavigate(keyCode);
    });
  };

  handleNavigate = (keyCode) => {
    let page = history.location.pathname.substr(1);
    page = Number(page) || page;
    const { routeList } = this.state;
    const pageIndex = routeList.indexOf(page);
    const delay = 800;
    switch (keyCode) {
      case 37:
      case 38:
      case 'previous':
        if (page === 1) {
          return false;
        }
          this.handleReverseAnimate()
          setTimeout(() => {
            this.setState({ forward: false });
            history.push(`/${routeList[pageIndex - 1]}`);
          }, delay);
        break;
      case 39:
      case 40:
      case 'next':
        if (page >= config.length) {
          return false;
        }
          this.handleReverseAnimate()
          setTimeout(() => {
            this.setState({ forward: true });
            history.push(`/${routeList[pageIndex + 1]}`);
          }, delay);
        break;
      default:
        return false;
    }
  }

  handleReverseAnimate = () => {
    reverseAllTweens();
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
        <Router forward={this.state.forward} handleNavigate={this.handleNavigate.bind(this)}/>
      </div>
    );
  }
}

export default App;
