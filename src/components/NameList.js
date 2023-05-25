import React from "react";
// import Pet from "./Pet";

function NameList() {
  const names = ["remmy", "beans", "cheese"];
  // const pets = [
  //   { id: 1, name: "Remmy", age: 7, skill: "naps" },
  //   { id: 2, name: "Cheeto", age: 8, skill: "b-a-l-l" },
  //   { id: 3, name: "Chip", age: 3, skill: "playing dead" },
  //   { id: 4, name: "Wiley", age: 6, skill: "manipulation" },
  //   { id: 5, name: "Beans", age: 2, skill: "catastrophic destruction" },
  // ];
  const nameList = names.map((name, index) => (
    // index as key can cause issues when prepending or sorting list
    // only use index as key when items dont have uid AND list will never changed/ordered/filtered
    <h2 key={index}>
      {name}'s key is {index}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
