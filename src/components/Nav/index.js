import React, { Component } from "react";
import { getRouteList } from "../../scripts/utils";

class Navigate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routeList: []
    };
  }
  handleClick = action => {
    if(!action) {
      return;
    }
    this.props.handleNavigate(action);
  }

  componentDidMount() {
    getRouteList(list => {
      this.setState({ routeList: list });
    });
  }

  render() {
    const { location } = this.props;
    const { routeList } = this.state;
    let page = location.pathname.substr(1);
    page = Number(page) || page;
    let nextItem = routeList.indexOf(page) + 1;
    nextItem = routeList[nextItem];
    const hideNext = typeof nextItem === 'string' || typeof nextItem === 'undefined';

    return (
      <nav>
        <ul className="cd-vertical-nav">
          <li onClick={this.handleClick.bind(this, 'previous')}><a className="cd-prev">Prev</a></li>
          <li onClick={this.handleClick.bind(this, 'next')}><a className={`cd-next ${hideNext ? 'hidden' : ''}`}>Next</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigate;
