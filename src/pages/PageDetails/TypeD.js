import React, { Component } from "react";
import Header from "../../components/Header";

class Page extends Component {
  render() {
    const { params } = this.props;
    const { title, paragraph, image } = params;
    const isGallery = typeof image !== "string";
    return (
      <div
        className="page page-details-type-d"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <Header dark={true} />
        <div className="row top">
          <div className="col-lg-6 ">
            {title && <h1 className="strip">{title}</h1>}
          </div>
          <div className="col-lg-4 sub-title">
            {paragraph && <p className="reveal-text dark">{paragraph}</p>}
          </div>
        </div>
        <div className="row bottom">
          <div className={`col-lg-12 ${isGallery ? "gallery" : "full"}`}>
            {isGallery ? (
              <div className="row gallery">
                {image.map((item, index) => {
                  return (
                    <div
                      className="col-lg-3 gallery-item"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={200 * (index + 1)}
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
