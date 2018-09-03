import React, { Component } from 'react';
import Header from '../../components/Header';
import { tweenHeader, generateHeader } from "../../scripts/utils";

class Page extends Component {
  componentDidMount() {
    tweenHeader();
  }
  render() {
    const { params } = this.props;
    const { title, paragraph, image, hasHeader, subTitle } = params;
    return (
      <div
        className="page page-title"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: '#000',
        }}
      >
        <div className="row">
          {hasHeader && <Header />}
          <div className="col-lg-12 title">
          {title && <h1 className="page-title-text">{generateHeader(title)}</h1>}
            {subTitle && (
              <h3 className="slide-right" data-duration="0.8">
                {subTitle}
              </h3>
            )}
          </div>
          {paragraph ? (
            <div className="col-lg-4 description">
              <div>
                {paragraph.map((item, index) => {
                  return (
                    <p
                      key={index}
                      data-duration="0.7"
                      data-delay={0.2 * (index + 1)}
                      className="slide-right"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Page;
