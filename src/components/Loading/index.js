import React from 'react';

class Loader extends React.Component {
  render() {
    const { children, type = 'primary', onClick, disabled, fading } = this.props;

    return (
      <div className={`app-loader ${fading && 'fading'} ${type}`}>
        {
          {
            primary: (
              <div className="app-loader-spinner primary">
                <span />
                <span />
                <span />
                <span />
              </div>
            ),
            secondary: (
              <div className="app-loader-spinner secondary">
                <div className="rect-1" />
                <div className="rect-2" />
                <div className="rect-3" />
                <div className="rect-4" />
                <div className="rect-5" />
              </div>
            ),
          }[type]
        }
      </div>
    );
  }
}

export default Loader;
