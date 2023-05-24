import React, { Component } from "react";
import "./styles.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Click from "./components/Click";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Tiny React Sampler</h1>
        <div id="outerSection">
          <h2>Lists</h2>
          <List />
        </div>
        {/* <div id="outerSection">
          <h2>Functional Components</h2>
          <Greet />
          <h3>With Props</h3>
          <Greet name="Cheetos" />
          <h4>And with child props</h4>
          <Greet name="Remmy">
            <button>Pet Me</button>
          </Greet>
        </div>
        <div id="outerSection">
          <h2>Class Components</h2>
          <Welcome />
          <h3>With Props</h3>
          <Welcome name="Beans" />
          <h4>And with child props</h4>
          <Welcome name="Wiley">
            <button>Let Me Outside</button>
          </Welcome>
        </div>
        <div id="outerSection">
          <h2>state</h2>
          <Message />
          <h2>setState</h2>
          <Counter />
        </div>
        <div id="outerSection">
          <h2>Binding Event Handlers</h2>
          <h3>Functional Components</h3>
          <Click />
          <h3>Class Components</h3>
          <ClassClick />
          <EventBind />
        </div>
        <div id="outerSection">
          <h2>Methods as Props</h2>
          <ParentComponent />
        </div>
        <div id="outerSection">
          <h2>Conditionals</h2>
          <UserGreeting />
        </div> */}
      </div>
    );
  }
}

export default App;
