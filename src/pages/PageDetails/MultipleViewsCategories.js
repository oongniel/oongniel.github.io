import React from 'react';
import Header from '../../components/Header';
import { generateHeader } from '../../scripts/utils';
const DefaultView = props => {
  // console.log(props);
  const { params, renderContent } = props;
  const {
    title,
    Content1,
    Content2,
    Content3,
    Content4,
    Content5,
    Content6,
    Content7,
    Content8,
    light,
  } = params;
  return (
    <div className="view default-view">
      <Header dark={light} />
      <div className="row">
        <div className="col-lg-12 top">
          <div className="row">
            <div className="col-lg-6 left">
              {title && (
                <h1 className="page-title-text">{generateHeader(title)}</h1>
              )}
              <div className="row">
                <div
                  className="col-lg-6 slide-down"
                  data-duration="0.6"
                  data-delay="0.1"
                >
                  {renderContent(Content1)}
                  {!!Content8 ? renderContent(Content8) : null}
                </div>
                <div
                  className="col-lg-6 slide-down"
                  data-duration="0.6"
                  data-delay="0.1"
                >
                  {renderContent(Content2)}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 right slide-left"
              data-duration="0.6"
              data-delay="0.1"
              style={{
                backgroundImage: `url(${Content3})`,
              }}
            />
          </div>
        </div>
        <div className={`col-lg-12 bottom ${!!Content7 && 'full'}`}>
          <div className="row">
            {Content7 ? (
              <div
                className="col-lg-3 slide-up"
                data-duration="0.6"
                data-delay="0.1"
                style={{
                  backgroundImage: `url(${Content7})`,
                }}
              />
            ) : null}
            <div
              className={`col-lg-3 slide-up ${!!Content7 ? '' : 'offset-lg-3'}`}
              data-duration="0.6"
              data-delay="0.2"
              style={{
                backgroundImage: `url(${Content4})`,
              }}
            />
            <div
              className="col-lg-3 slide-up"
              style={{
                backgroundImage: `url(${Content5})`,
              }}
              data-duration="0.6"
              data-delay="0.3"
            />
            <div
              className="col-lg-3 slide-up"
              style={{
                backgroundImage: `url(${Content6})`,
              }}
              data-duration="0.6"
              data-delay="0.4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalView = props => {
  // console.log(props);
  const { params } = props;
  const { title, Image1, Image2, Image3, paragraph, list, light } = params;
  return (
    <div className="view vertical-view">
      <Header dark={light} />
      <div className="row">
        <div className="col-lg-12 top">
          {title && (
            <h1 className="page-title-text">{generateHeader(title)}</h1>
          )}
        </div>
        <div className="col-lg-12 bottom">
          <div className="row">
            <div
              className="col-lg-3 slide-up"
              data-duration="0.6"
              data-delay="0.1"
            >
              <p className="reveal-text">{paragraph}</p>
              <ul className="reveal-text">
                {list.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div
                  className="col-lg-12 row-2-item slide-up"
                  data-duration="0.6"
                  data-delay="0.2"
                  style={{
                    backgroundImage: `url(${Image1})`,
                  }}
                />
                <div
                  className="col-lg-12 row-2-item slide-up"
                  data-duration="0.6"
                  data-delay="0.3"
                  style={{
                    backgroundImage: `url(${Image2})`,
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 slide-up"
              style={{
                backgroundImage: `url(${Image3})`,
              }}
              data-duration="0.6"
              data-delay="0.4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HalfView = props => {
  // console.log(props);
  const { params, renderContent } = props;
  const { title, Content1, Content2, Content3, Content4, light } = params;
  return (
    <div className="view half-view">
      <Header dark={light} />
      {title && <h1 className="page-title-text">{generateHeader(title)}</h1>}
      <div className="row">
        <div className="col-lg-3 top">
          {Content1.map((item, index) => {
            return (
              <p
                key={index}
                className="reveal-text dark slide-right"
                data-delay={0.1 * (index + 1)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="col-lg-3 top">
          <div className="row">
            <div
              className="col-lg-12 h50 slide-up"
              data-duration="0.7"
              data-delay="0.1"
            >
              {renderContent(Content2)}
            </div>
            <div
              className="col-lg-12 h50 slide-up"
              data-delay="0.3"
              style={{
                backgroundImage: `url(${Content3})`,
                backgroundPosition: 'bottom',
              }}
            />
          </div>
        </div>
        <div
          className="col-lg-6 slide-left"
          data-delay="0.5"
          style={{
            backgroundImage: `url(${Content4})`,
          }}
        />
      </div>
    </div>
  );
};
export { DefaultView, VerticalView, HalfView };
