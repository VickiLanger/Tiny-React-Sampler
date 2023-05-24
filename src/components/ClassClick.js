import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("button was clicked");
  }

  render() {
    return (
      <div id="innerSection">
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
