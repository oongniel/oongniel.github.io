import React, { Component } from "react";
import Header from "../../components/Header";
import { tweenHeader, generateHeader } from "../../scripts/utils";

class Page extends Component {
  componentDidMount() {
    tweenHeader();
  }
  render() {
    const { params } = this.props;
    const { title, paragraph, image, className } = params;
    const isGallery = typeof image !== "string";
    return (
      <div
        className={`page page-details-type-d ${className}`}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <Header dark={true} />
        <div className="row top">
          <div className="col-lg-6 ">
          {title && <h1 className="page-title-text">{generateHeader(title)}</h1>}
          </div>
          <div className="col-lg-4 sub-title">
            {paragraph && <p className="slide-left reveal-text dark">{paragraph}</p>}
          </div>
        </div>
        <div className="row bottom">
          <div className={`col-lg-12 ${isGallery ? "gallery" : "full"}`}>
            {isGallery ? (
              <div className="row gallery">
                {image.map((item, index) => {
                  return (
                    <div
                      className="col-lg-3 gallery-item slide-up"
                      data-duration="0.6"
                      data-delay={0.2 * (index + 1)}
                    >
                      <img src={item.image} alt="" />
                      <div>
                        <span>{item.title}</span>
                        <span>{item.artist}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
