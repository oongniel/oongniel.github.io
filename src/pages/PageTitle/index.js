import React, { Component } from "react";
import Header from "../../components/Header";

class Page extends Component {
  render() {
    const { params } = this.props;
    const { title, paragraph, image, hasHeader, subTitle } = params;
    return (
      <div
        className="row page page-title"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "#000"
        }}
      >
        {hasHeader && <Header />}
        <div className="col-lg-12 title">
          {title && <h1 className="strip">{title}</h1>}
          {subTitle && (
            <h3 data-aos="fade-right" data-aos-duration="800">
              {subTitle}
            </h3>
          )}
        </div>
        {paragraph ? (
          <div className="col-lg-4 description">
            <div className="" data-delay="1000">
              {paragraph.map((item, index) => {
                return (
                  <p
                    key={index}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay={100 * (index + 1)}
                    className="reveal-text"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Page;
