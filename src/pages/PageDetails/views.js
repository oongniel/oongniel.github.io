import React from "react";
import Header from "../../components/Header";

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
    light
  } = params;
  return (
    <div className="view default-view">
      <Header dark={light} />
      <div className="row">
        <div className="col-lg-12 top">
          <div className="row">
            <div className="col-lg-6 left">
              {title && <h1 className="strip">{title}</h1>}
              <div className="row">
                <div
                  className="col-lg-6"
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {renderContent(Content1)}
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {renderContent(Content2)}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 right"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
              style={{
                backgroundImage: `url(${Content3})`
              }}
            />
          </div>
        </div>
        <div className="col-lg-12 bottom">
          <div className="row">
            <div
              className="col-lg-3 offset-lg-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              style={{
                backgroundImage: `url(${Content4})`
              }}
            />
            <div
              className="col-lg-3"
              style={{
                backgroundImage: `url(${Content5})`
              }}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            />
            <div
              className="col-lg-3"
              style={{
                backgroundImage: `url(${Content6})`
              }}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
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
          {title && <h1 className="strip">{title}</h1>}
        </div>
        <div className="col-lg-12 bottom">
          <div className="row">
            <div
              className="col-lg-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <p className="reveal-text">{paragraph}</p>
              <ul className="reveal-text">
                {list.map(item => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div
                  className="col-lg-12 row-2-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                  style={{
                    backgroundImage: `url(${Image1})`
                  }}
                />
                <div
                  className="col-lg-12 row-2-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  style={{
                    backgroundImage: `url(${Image2})`
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{
                backgroundImage: `url(${Image3})`
              }}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
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
      {title && <h1 className="strip">{title}</h1>}
      <div className="row">
        <div className="col-lg-3 top">
          {Content1.map((item, index) => {
            return (
              <p
                key={index}
                className="reveal-text dark"
                data-aos="fade-right"
                data-aos-delay={100 * (index + 1)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="col-lg-3 top">
          <div className="row">
            <div
              className="col-lg-12 h50"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              {renderContent(Content2)}
            </div>
            <div
              className="col-lg-12 h50"
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                backgroundImage: `url(${Content3})`,
                backgroundPosition: "bottom"
              }}
            />
          </div>
        </div>
        <div
          className="col-lg-6"
          data-aos="fade-left"
          data-aos-delay="500"
          style={{
            backgroundImage: `url(${Content4})`
          }}
        />
      </div>
    </div>
  );
};
export { DefaultView, VerticalView, HalfView };
