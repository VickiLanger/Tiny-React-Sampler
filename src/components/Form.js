import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comments: "",
      animal: "Cats",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAnimalChange = (event) => {
    this.setState({
      animal: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `Hi ${this.state.name}. I'm glad to here you like ${this.state.animal}`
    );
    event.preventDefault; // avoids refresh
  };

  render() {
    const { name, comments, animal } = this.state; // this allows removing "this.state" from each of the value props
    return (
      <div id="innerSection">
        <form onSubmit={this.handleSubmit}>
          Cat Club Membership Application
          <fieldset>
            {" "}
            <legend>Your Info</legend>
            <label>Name</label>
            <input type="text" value={name} onChange={this.handleNameChange} />
          </fieldset>
          <fieldset>
            <legend>More Info</legend>
            <label>Favorite Animal?</label>
            <select value={animal} onChange={this.handleAnimalChange}>
              <option value="cats">Cats</option>
              <option value="kitties">Kitties</option>
              <option value="felines">Felines</option>
            </select>
            <label>Why</label>
            <textarea
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

// Controlled component cycle:
// set initial value from state -> propagating changed value to the state -> update input field
// step 1 - set up jsx/html
// step 2 - add to constructor
// step 3 - handling onChange event
