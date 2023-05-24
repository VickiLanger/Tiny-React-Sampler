import React, { Component } from "react";

// a class component with state instead of props
// using state because props are immutable and we want the text to change

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome, Visitor"
    };
  }

  changeMsg() {
    this.setState({
      msg: "Thanks for clicking. You're now on our email list"
    });
  }

  render() {
    return (
      <div id="innerSection">
        <p>{this.state.msg}</p>
        <button onClick={() => this.changeMsg()}>Click me, or else</button>
      </div>
    );
  }
}

export default Message;
