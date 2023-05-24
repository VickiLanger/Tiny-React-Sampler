import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent"
    };
    // when using this keyword, must bind
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent() {
    alert(`hello ${this.state.parentName}`);
  }
  render() {
    return (
      <div id="innerSection">
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
