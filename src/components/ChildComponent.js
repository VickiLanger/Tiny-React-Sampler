import React from "react";
function ChildComponent(props) {
  return (
    <div id="innerSection">
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
