import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const { dark } = this.props;
    return (
      <div
        className={`nav ${dark ? "dark" : ""}`}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <div className="row">
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="500"
          >
            <Link to="/dubai">DUBAI</Link>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="600"
          >
            <Link to="/difc">DIFC</Link>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="700"
          >
            <Link to="/gatevillage">GATE VILLAGE</Link>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="800"
          >
            <Link to="/masterplan">MASTERPLAN</Link>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="900"
          >
            <Link to="/gateavenue">GATE AVENUE</Link>
          </div>
          <div
          // data-aos="fade-down"
          // data-aos-duration="500"
          // data-aos-delay="1000"
          >
            <Link to="/techvisual">TECH VISUALS</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
