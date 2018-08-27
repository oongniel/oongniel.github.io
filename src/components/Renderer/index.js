import React, { Component } from "react";

class Renderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ render: true });
    // }, 500);
  }

  render() {
    const { children } = this.props;
    const { render } = this.state;
    return <div className="renderer">{true ? children : null}</div>;
  }
}

export default Renderer;
