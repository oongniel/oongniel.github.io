import React, { Component } from "react";

class Renderer extends Component {
  render() {
    const { children } = this.props;
    return <div className="renderer">{children}</div>;
  }
}

export default Renderer;
