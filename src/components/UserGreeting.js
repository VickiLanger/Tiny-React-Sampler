import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // use short circut for when you want something or nothing
    return (
      this.state.isLoggedIn && <div id="innerSection">Welcome someUsername</div>
    );

    // return this.state.isLoggedIn ? (
    //   <div>Welcome someUsername</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
  }
}

export default UserGreeting;
