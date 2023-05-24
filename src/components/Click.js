import React from "react";

// use function, not function call. no (). onClick={clickHandler}
function Click() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div id="innerSection">
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Click;
