import React, { Component } from "react";
import Header from "../../components/Header";

class Page extends Component {
  render() {
    const { params } = this.props;
    const { title, countData, image, className } = params;

    return (
      <div
        className={`page page-details-type-b ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />
        <div className="row">
          <div className="col-lg-12 title">
            {title && <h1 className="strip">{title}</h1>}
          </div>
          {/* <div className="col-lg-12 count-data-container"> */}
          <div className="row count-data-container">
            {countData.map((item, index) => {
              const delay = 500 + 200 * (index + 1);
              return (
                <div
                  className={`info-count col-lg-${12 / countData.length} `}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={delay}
                  key={index}
                >
                  {item.icon ? <img src={item.icon} alt="" /> : null}
                  {item.prefix ? (
                    <span className="prefix">{item.prefix}</span>
                  ) : null}
                  {item.count ? (
                    <span className="count">{item.count}</span>
                  ) : null}
                  {item.suffix ? (
                    <span className="suffix">{item.suffix}</span>
                  ) : null}
                  {/* <p>million residents. Set to double by 2030</p> */}
                </div>
              );
            })}
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Page;
