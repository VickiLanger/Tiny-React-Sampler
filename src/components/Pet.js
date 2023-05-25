import React from "react";

function Pet({ pet }) {
  return (
    <div>
      <h3>
        {pet.name}, {pet.age}, is good at {pet.skill}
      </h3>
    </div>
  );
}

export default Pet;
