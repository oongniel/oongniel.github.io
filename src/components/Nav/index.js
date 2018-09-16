import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { getRouteList } from '../../scripts/utils';

class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: [],
    };
  }
  handleClick = action => {
    if (!action) {
      return;
    }
    this.props.handleNavigate(action);
  };

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
    const hideNext =
      typeof nextItem === 'string' || typeof nextItem === 'undefined';
    const hidePrev = page === 1;
    return (
      <nav>
        <ul className="cd-vertical-nav">
          <li onClick={this.handleClick.bind(this, 'previous')}>
            <a className={`cd-prev ${hidePrev ? 'hidden' : ''}`}>Prev</a>
          </li>
          <li
            data-tip
            data-for="tool-tip"
            onClick={this.handleClick.bind(this, 'next')}
          >
            <a className={`cd-next ${hideNext && page !== 1 ? 'hidden' : ''}`}>
              Next
            </a>
          </li>
          {page === 1 ? <ReactTooltip id="tool-tip" place="left" type="info" effect="solid" className="place-left type-info">
            <span>Use these arrows <br />to navigate through the slide, <br />or use your keyboard arrow keys</span>
          </ReactTooltip> : null}
        </ul>
      </nav>
    );
  }
}

export default Navigate;
