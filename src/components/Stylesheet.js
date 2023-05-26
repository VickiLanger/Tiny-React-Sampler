import React from "react";
import "./Styles.css";

function Stylesheet(props, { text }) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h3 class={`${className} cut-here`}>Conditional with multiple classes</h3>
      <h3 class={`${className} cut-here`}>{props.text}</h3>
    </div>
  );
}

export default Stylesheet;
