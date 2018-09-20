import React, { Component } from 'react';
import $ from 'jquery';
// import objectFitImages from 'object-fit-images';
import Header from '../../components/Header';
import Logo from '../../images/logo.png';
import { generateHeader, tweenHeader } from '../../scripts/utils';

class ContentLeftImageRight extends Component {
  componentDidMount() {
    tweenHeader();
    // objectFitImages($('.image-full img'), {
    //   watchMQ: true
    // })
  }
  render() {
    const { params } = this.props;
    const {
      title,
      titles,
      image,
      showLogo,
      hasHeader,
      paragraph,
      className,
      list,
      listBottom,
      forward,
      boldHeaders,
      contacts,
      video,
      imageList
    } = params;

    return (
      <div className={`page page-details-type-a ${className}`}>
        {hasHeader ? <Header /> : null}
        <div className="row ">
          <div className="col-lg-4 left">
            {title ? (
              <h1 className="page-title-text">{generateHeader(title)}</h1>
            ) : null}

            {titles ? (
              <div>
                {titles.map(title => {
                  return (
                    <h1 className="multiple page-title-text" key={title}>
                      {generateHeader(title)}
                    </h1>
                  );
                })}
              </div>
            ) : null}
            {list ? (
              <ul>
                {list.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`slide-${forward ? 'right' : 'left'}`}
                      data-duration="0.7"
                      data-delay={0.15 * (index + 1)}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  );
                })}
              </ul>
            ) : null}
            {boldHeaders ? (
              <div className="bold-headers">
                {boldHeaders.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="slide-right"
                      data-duration="0.7"
                      data-delay={0.1 * (index + 1)}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            ) : null}
            {contacts ? (
              <div className="contacts">
                {contacts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slide-right"
                      data-duration="0.7"
                      data-delay={0.15 * (index + 1)}
                    >
                      <span>{item.name}</span>
                      <span>{item.position}</span>
                      <span>{item.position2}</span>
                      <span>{item.number}</span>
                      <span>{item.email}</span>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {paragraph ? (
              <div>
                {paragraph.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className={` dark slide-${
                        forward ? 'right' : 'left'
                      }`}
                      data-delay={0.2 * (index + 1)}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            ) : null}
            {imageList ? 
              <div className="row image-list">
                {imageList.map((item, index) => {
                  return <div className="col-xl-4 col-md-4 slide-up" data-delay={0.15 * (index + 1)}><img src={item} alt="" /></div>
                })}
              </div>  
            : null}
            {showLogo ? (
              <div className=" dark logo " data-delay="1">
                <img src={Logo} width="100%" alt="" />
              </div>
            ) : null}
            {listBottom ? (
              <ul className="slide-up row list-bottom" data-duration="1">
                {listBottom.map(item => {
                return (
                    <li className="col-lg-6" key={item} dangerouslySetInnerHTML={{ __html: item }} />
                  );
                })}
              </ul>
            ) : null}
          </div>
          <div
            className={`col-lg-8 image-full slide-${
              forward ? 'right' : 'left'
            }`}
            data-duration="1.5"
            // style={{
            //   backgroundImage: `url(${image})`,
            // }}
          >
            {image ? <div style={{ backgroundImage: `url(${image})`}} id="image-background-container"></div> : null}
            {/* {image ? <img src={image} alt="" data-object-fit="cover"/> : null} */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentLeftImageRight;
