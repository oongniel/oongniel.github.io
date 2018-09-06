import React, { Component } from 'react';
import Header from '../../components/Header';
import { generateHeader, tweenHeader } from '../../scripts/utils';

class ContentHeadingCenter extends Component {
  componentDidMount() {
    tweenHeader();
  }
  render() {
    const { params } = this.props;
    const { title, hasHeader, className, image } = params;

    return (
      <div
        className={`page page-details-type-e ${className}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: '#000',
        }}
      >
        {hasHeader ? <Header /> : null}
        <div className="row ">
          {title ? (
            <h1 className="page-title-text">{generateHeader(title)}</h1>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ContentHeadingCenter;
