import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Ola"
    };

    // best way to bind
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      msg: "Tchau"
    });
  }

  render() {
    return (
      <div id="innerSection">
        <div>{this.state.msg}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// // 4 ways to bind
// 1. onClick={this.clickHandler.bind(this)}
// 2. onClick={() => this.clickHandler()}>
// 3. this.clickHandler = this.clickHandler.bind(this); at end of constructor. this is the best way
// 4. handler as an arrow function clickHandler = () => {this.setState({msg:"Tchau"})}
