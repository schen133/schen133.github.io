import { useState } from "react";

function MainPage() {
  var names = ["Chris", "Arnav", "Steph"];

//   var nameChosen = names[0];

  const [nameChosen, setNameChosen] = useState(names[0])

  const handleClick = () => {
    setNameChosen(names[2]);
  };

  return (
    <div>
      <Header></Header>
      <button onClick={() => handleClick()} className= "text-red-200 bg-red-700 hover:text-red-900 hover:bg-red-100 transition duration-[5s]"> Click me to change name</button>

      <h1> {nameChosen}</h1>
    </div>
  );
}

const Header = () => {
  return (
    <h1 id="headID" className="text-[50px] text-green-400 border-b-[5px]">
      My name is Steph Kim
    </h1>
  );
};

export default MainPage;
