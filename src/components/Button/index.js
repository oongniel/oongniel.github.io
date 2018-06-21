import React from 'react';

class Button extends React.Component {
  render() {
    const { children, type, onClick, disabled, className } = this.props;
    return (
      <button className={`app-button ${type} ${className}`} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
