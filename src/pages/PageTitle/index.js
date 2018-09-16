import React, { Component } from 'react';
import Player from '@vimeo/player';
import $ from 'jquery';
import { TweenMax, Power3 } from 'gsap';
import Header from '../../components/Header';
import { tweenHeader, generateHeader } from '../../scripts/utils';
import Mute from "../../images/icons/mute.svg";
import Unmute from "../../images/icons/unmute.svg";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChrome: false,
      muted: true,
      player: null
    }
  }
  componentDidMount() {
    tweenHeader();
    const { video } = this.props.params;
    const { muted } = this.state;
    if(video) {
      const player = new Player('fullscreen-video', {
        id: video,
        loop: true,
        background: true,
        muted: false,
      });
      this.setState({ player });
      var isGoogleChrome = window.chrome != null && window.navigator.vendor === "Google Inc.";
      // player.on('progress', data => {
      //   if(data.seconds >= 30 && muted) {
      //     $('#mute').trigger('click');
      //   }
      // })
      this.setState({ isChrome: isGoogleChrome })
      if(!isGoogleChrome) {
        player.setVolume(1);
      }
    }
  }

  handleMute = () => {
    const { muted, player } = this.state;
    // console.log(muted, player)
    player.setVolume(muted ? 1 : 0);
    this.setState({ muted: !muted});
  }

  render() {
    const { params } = this.props;
    const { isChrome, muted } = this.state;
    const {
      title,
      paragraph,
      image,
      hasHeader,
      subTitle,
      className,
      video,
    } = params;
    return (
      <div
        className={`page page-title ${className}`}
        style={{
          backgroundColor: '#000',
        }}
      >
        <div className="image-overlay" />
        {/* {image ?<img src={image} /> : null} */}
        {image ? <div style={{ backgroundImage: `url(${image})`}} id="image-background-container"></div> : null}
        {video && isChrome ? <img id="mute" src={muted ? Mute : Unmute} onClick={this.handleMute} />: null}
        {video ? (
            <div id="fullscreen-video" />
          ) : null}
        <div className="row">
          {hasHeader && <Header />}
          <div className="col-lg-12 title">
            {title && (
              <h1 className="page-title-text">{generateHeader(title)}</h1>
            )}
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
