import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    const { dark } = this.props;
    return (
      <div
        className={`nav ${dark ? 'dark' : ''}`}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0"
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
