import React, { Component } from 'react';
import Header from '../../components/Header';
import { generateHeader, tweenHeader } from '../../scripts/utils';

class Page extends Component {
  componentDidMount() {
    tweenHeader();
  }
  render() {
    const { params } = this.props;
    const { title, countData, image, className } = params;
    const split = className === 'split-first';
    return (
      <div
        className={`page page-details-type-b ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />
        <div className="row">
          <div className="col-lg-12 title">
            {title && (
              <h1 className="page-title-text">{generateHeader(title)}</h1>
            )}
          </div>
          {/* <div className="col-lg-12 count-data-container"> */}
          <div className="row count-data-container">
            {countData.map((item, index) => {
              const delay = 0.5 + 0.25 * (index + 1);
              return (
                <div
                  className={`slide-up info-count col-lg-${
                    index === 0 && split
                      ? '6'
                      : 12 / (split ? countData.length + 1 : countData.length)
                  } `}
                  data-duration="0.8"
                  data-delay={delay}
                  key={index}
                >
                  <div>
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
                    {item.counts ? (
                      <div className={split ? 'row' : ''}>
                        {item.counts.map(count => {
                          return (
                            <div className={split && 'col-lg-6'}>
                              {count.count ? (
                                <span className="count">{count.count}</span>
                              ) : null}
                              {count.suffix ? (
                                <span className="suffix">{count.suffix}</span>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
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
