import React, { Component } from "react";

// a class component

class Welcome extends Component {
  render() {
    // destructuring props
    const { name, children } = this.props;
    return (
      <div id="innerSection">
        <p>Hi, {name}</p>
        {children}
      </div>
    );
  }
}

export default Welcome;
