import React, { Component } from "react";
// import { TweenLite } from "gsap";
import Header from "../../components/Header";
import {
  animateHeader,
  animateCount,
  animateOnScroll
} from "../../scripts/utils";
import Logo from "../../images/logo.png";

class Home extends Component {
  componentDidMount() {
    animateHeader();
    animateCount();
    animateOnScroll();
    window.AOS.init();
  }

  render() {
    const { params } = this.props;
    const {
      title,
      image,
      showLogo,
      hasHeader,
      paragraph,
      className,
      list,
      listBottom
    } = params;
    return (
      <div className={`page page-details-type-a ${className}`}>
        {hasHeader ? <Header /> : null}
        <div className="row ">
          <div className="col-lg-4 left">
            {title && <h1 className="strip">{title}</h1>}
            {list ? (
              <ul>
                {list.map(item => {
                  return <li>{item}</li>;
                })}
              </ul>
            ) : null}
            {paragraph ? (
              <div>
                {paragraph.map(item => {
                  return <p className="reveal-text dark">{item}</p>;
                })}
              </div>
            ) : null}
            {showLogo ? (
              <div className="reveal-text dark logo" data-delay="1000">
                <img src={Logo} width="100%" alt="" />
              </div>
            ) : null}
            {listBottom ? (
              <ul className="row list-bottom">
                {listBottom.map(item => {
                  return <li className="col-lg-6">{item}</li>;
                })}
              </ul>
            ) : null}
          </div>
          <div
            className="col-lg-8 image-full"
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
