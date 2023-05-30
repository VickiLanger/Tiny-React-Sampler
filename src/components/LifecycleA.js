import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Me",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div id="innerSection">
        <div>Lifecycle A div</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// order of execution during mounting: constructor > getDerivedStateFromPrompt > render > componentDidMount
