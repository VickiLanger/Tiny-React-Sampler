import React, { Component } from "react";

class ComponentName extends Component {
  Handler() {
    console.log("");
  }

  render() {
    return (
      <div id="innerSection">
        <button onClick={this.Handler}>Click Me</button>
      </div>
    );
  }
}

export default ComponentName;
