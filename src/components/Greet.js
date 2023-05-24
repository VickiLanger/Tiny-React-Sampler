import React from "react";

// a function component

// const Greet = (props) => {
//   return <p>Hi, {props.name}</p>;
// };

// const Greet = () => <p>Hi, {props.name}</p>;

const Greet = ({ name, children }) => {
  return (
    <div id="innerSection">
      <p>Hi, {name}</p>
      {children}
    </div>
  );
};

export default Greet;
