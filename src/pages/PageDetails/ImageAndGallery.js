import React, { Component } from 'react';
import Header from '../../components/Header';
import { tweenHeader, generateHeader } from '../../scripts/utils';
import SkyLight from 'react-skylight';

class ImageAndGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      image: null,
    };
  }
  componentDidMount() {
    tweenHeader();
  }
  handleImagePreview = image => {
    this.galleryPreview.show();
    this.setState({ modalOpen: true, image });
  };
  render() {
    const { params } = this.props;
    const { title, paragraph, image, className, imageClass } = params;
    const isGallery = typeof image !== 'string';
    return (
      <div
        className={`page page-details-type-d ${className}`}
        style={{
          // backgroundImage: `url(${image})`,
        }}
      >
        <Header dark={true} />
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.galleryPreview = ref)}
          transitionDuration={500}
        >
          <img src={this.state.image} width="100%" alt="" />
        </SkyLight>
        <div className="row top">
          <div className="col-lg-6 ">
            {title && (
              <h1 className="page-title-text">{generateHeader(title)}</h1>
            )}
          </div>
          <div className="col-lg-4 sub-title">
            {paragraph && <p className="slide-left dark">{paragraph}</p>}
          </div>
        </div>
        <div
          className={`row bottom ${imageClass}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className={`col-lg-12 ${isGallery ? 'gallery' : 'full'}`}>
            {isGallery ? (
              <div className="row gallery">
                {image.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-3 gallery-item slide-up"
                      data-duration="0.6"
                      data-delay={0.2 * (index + 1)}
                      onClick={this.handleImagePreview.bind(this, item.image)}
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
            ) : (
              // <img src={image} className={`slide-up ${imageClass}`} data-object-fit="contain" />
              null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageAndGallery;
