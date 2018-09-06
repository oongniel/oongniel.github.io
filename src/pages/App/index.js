import React, { Component } from 'react';
import $ from 'jquery';
import Router from '../../router';
import history from '../../history';
import config from '../../config';
import { reverseAllTweens, getRouteList } from '../../scripts/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
      forward: true,
    };
  }
  componentDidMount() {
    getRouteList(list => {
      this.setState({ routeList: list });
    });
    document.addEventListener('mousemove', event => {
      if(true) {
        $('#mouse-pointer').css({
          top: event.pageY + 'px',
          left: event.pageX + 'px',
        });
      }
    });
    document.addEventListener('keydown', event => {
      const keyCode = event.which;
      this.handleNavigate(keyCode);
    });
  }

  allownavigate = () => {
    const { routeList } = this.state;
    let page = window.location.pathname.substr(2);
    page = Number(page) || page;
    let nextItem = routeList.indexOf(page) + 1;
    nextItem = routeList[nextItem];
    const hideNext = typeof nextItem === 'string' || typeof nextItem === 'undefined';
    console.log(nextItem, routeList);
  };

  handleNavigate = keyCode => {
    let page = window.location.hash.substr(2);
    page = Number(page) || page;
    const { routeList } = this.state;
    const pageIndex = routeList.indexOf(page);
    const delay = 700;

    // 
    let nextItem = pageIndex + 1;
    nextItem = routeList[nextItem];

    let prevItem = pageIndex - 1;
    prevItem = routeList[prevItem];
    console.log(nextItem, prevItem)
    // 
    const hideNext = typeof nextItem === 'string' || typeof nextItem === 'undefined';
    // const hidePrev = (typeof prevItem === 'string' || typeof prevItem === 'undefined') && typeof page === "number";

    switch (keyCode) {
      case 37:
      case 38:
      case 'previous':
        if (page === 1) {
          return false;
        }
        this.handleReverseAnimate();
        setTimeout(() => {
          this.setState({ forward: false });
          history.push(`/${routeList[pageIndex - 1]}`);
        }, delay);
        break;
      case 39:
      case 40:
      case 'next':
        if ((page >= config.length || hideNext) && page !== 1) {
          return false;
        }
        this.handleReverseAnimate();
        setTimeout(() => {
          this.setState({ forward: true });
          history.push(`/${routeList[pageIndex + 1]}`);
        }, delay);
        break;
      default:
        return false;
    }
  };

  handleReverseAnimate = () => {
    reverseAllTweens();
  };

  render() {
    return (
      <div className="page-main ">
        <Router
          forward={this.state.forward}
          handleNavigate={this.handleNavigate.bind(this)}
        />
      </div>
    );
  }
}

export default App;
