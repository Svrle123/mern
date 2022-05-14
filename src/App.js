import React, { useState } from "react";
import Triangle from "./components/Triangle";
import List from "./components/List";

const App = ({ answersRouteService }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const answers = await answersRouteService.get();
    setData(answers);
  }

  const postData = async (answer) => {
    await answersRouteService.post(answer);
    getData();
  }

  return (
    <div className="App">
      <Triangle isSelectTriangle postData={postData} />
      {data.length ?
        <React.Fragment>
          <Triangle answers={data} />
          <List answers={data} />
        </React.Fragment>
        : null
      }
    </div>
  );
};

export default App;
