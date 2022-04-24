import React, { useState } from "react";
import Triangle from "./components/Triangle";
import List from "./components/List";

const App = ({ apiService }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const answers = await apiService.getAnswers();
    setData(answers);
  }

  const postData = async (answer) => {
    await apiService.postAnswer(answer);
    getData();
  }

  return (
    <div className="App">
      <Triangle isSelectTriangle getData={getData} postData={postData} />
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
