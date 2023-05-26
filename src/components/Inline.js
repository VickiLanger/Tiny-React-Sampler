import React from "react";
// import "./Styles.css";

//inline styles are done by creating objects with camelCase keys and "string values"
const heading = {
  fontSize: "24px",
  border: "inset rebeccapurple 14px",
};

function Inline() {
  return (
    <div>
      <h3 style={heading}>Inline styling</h3>
    </div>
  );
}

export default Inline;
