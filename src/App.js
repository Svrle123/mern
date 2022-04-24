import React from "react";
import Triangle from "./components/Triangle";
import List from "./components/List";

const drawData = [
  {
    id: "asfgdsdfafa",
    x: 125,
    y: 212,
  },
  {
    id: "123414243523",
    x: 124,
    y: 33,
  },
  {
    id: "1235asdfaf",
    x: 105,
    y: 53,
  },
  {
    id: "000000008888",
    x: 155,
    y: 93,
  },
  {
    id: "46574tttttttt",
    x: 25,
    y: 235,
  },
  {
    id: "aaaaaaa11111",
    x: 207,
    y: 222,
  },
];

const App = () => {
  return (
    <div className="App">
      <Triangle isSelectTriangle />
      <Triangle drawData={drawData} />
      <List users={drawData} />
    </div>
  );
};

export default App;
