import React, { Component } from "react";
class Navigate extends Component {
  handleClick = action => {
    if(!action) {
      return;
    }
    this.props.handleNavigate(action);
  }
  render() {
    return (
      <nav>
        <ul className="cd-vertical-nav">
          <li onClick={this.handleClick.bind(this, 'previous')}><a className="cd-prev">Next</a></li>
          <li onClick={this.handleClick.bind(this, 'next')}><a className="cd-next">Prev</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigate;
