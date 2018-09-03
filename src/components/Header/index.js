import React, { Component } from 'react';
import history from '../../history';
import { reverseAllTweens } from '../../scripts/utils';
class Header extends Component {
  handleNavigate = (link) => {
    reverseAllTweens();
    const delay = 800;
    setTimeout(() => {
      history.push(link);
    }, delay);
  }
  render() {
    const { dark } = this.props;
    return (
      <div
        className={`nav ${dark ? 'dark' : ''} slide-down`}
        data-duration="0.8"
      >
        <div className="row">
          <div>
            <a onClick={this.handleNavigate.bind(this, "/dubai")} >DUBAI</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/difc")} >DIFC</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/gatevillage")} >GATE VILLAGE</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/masterplan")} >MASTERPLAN</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/gateavenue")} >GATE AVENUE</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/entertainmenthub")} >ENTERTAINMENT HUB</a>
          </div>
          <div>
            <a onClick={this.handleNavigate.bind(this, "/techvisual")} >TECH VISUALS</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
