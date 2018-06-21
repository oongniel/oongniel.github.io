import React, { Component } from 'react';
import AppLogo from '../../assets/images/logo.svg';
class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header-content">
          <img src={AppLogo} className="app-header-logo" />
          <div className="app-header-title-container">
            <span className="app-header-title">FLIGHT</span>
            <span className="app-header-sub-title">Search Engine</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
