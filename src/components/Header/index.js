import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    const { dark } = this.props;
    return (
      <div
        className={`nav ${dark ? 'dark' : ''} slide-down`}
        data-duration="0.8"
      >
        <div className="row">
          <div>
            <Link to="/dubai">DUBAI</Link>
          </div>
          <div>
            <Link to="/difc">DIFC</Link>
          </div>
          <div>
            <Link to="/gatevillage">GATE VILLAGE</Link>
          </div>
          <div>
            <Link to="/masterplan">MASTERPLAN</Link>
          </div>
          <div>
            <Link to="/gateavenue">GATE AVENUE</Link>
          </div>
          <div>
            <Link to="/entertainmenthub">ENTERTAINMENT HUB</Link>
          </div>
          <div>
            <Link to="/techvisual">TECH VISUALS</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
