import React from "react";
import Pet from "./Pet";

function NameList() {
  const pets = [
    { id: 1, name: "Remmy", age: 7, skill: "naps" },
    { id: 2, name: "Cheeto", age: 8, skill: "b-a-l-l" },
    { id: 3, name: "Chip", age: 3, skill: "playing dead" },
    { id: 4, name: "Wiley", age: 6, skill: "manipulation" },
    { id: 5, name: "Beans", age: 2, skill: "catastrophic destruction" },
  ];
  const petList = pets.map((pet) => <Pet pet={pet} />);
  return <div>{petList}</div>;
}

export default NameList;
