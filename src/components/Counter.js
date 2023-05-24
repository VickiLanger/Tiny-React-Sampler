import React, { Component } from "react";

// never modify state directly. this.state only belongs in constructor

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("callback value: ", this.state.count);
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
      () => {
        console.log("callback value: ", this.state.count);
      }
    );
    // console.log("count: ", this.state.count);
    // don't put code after setState (react will run them together) if you want it to be done after setState
    // instead, use a callback function as the 2nd param for setState
  }

  reset() {
    this.setState(
      {
        count: 0
      },
      () => {
        console.log("value has been reset to ", this.state.count);
      }
    );
  }

  render() {
    return (
      <div id="innerSection">
        <p>Count = {this.state.count}</p>
        <button onClick={() => this.increment()}>Click Me!</button>
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default Counter;
