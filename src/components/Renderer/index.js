import React, { Component } from "react";

class Renderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: true });
    }, 1000);
  }

  render() {
    const { children } = this.props;
    const { render } = this.state;
    return <div className="renderer">{render ? children : null}</div>;
  }
}

export default Renderer;
