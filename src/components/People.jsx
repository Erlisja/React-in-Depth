import React from "react";

function People() {
  const people = [
    {
      name: "Erlsja Kore",
      age: 28,
    },
    {
      name: "John Doe",
      age: 30,
    },
    {
      name: "Jane Doe",
      age: 25,
    },
  ];

  const peopleList = people.map((person) => {
    return (
      <div>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </div>
    );
  });

  return (
    <>
      <div>People</div>
      {peopleList}
    </>
  );
}

export default People;
