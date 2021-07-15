import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return <h1> Oooooooopss .. Thats not Good !!</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
