import "../styles.css";
import { useState } from "react";
import Hello from "./Hello";
import List from "./List";

const Application = () => {
  const [list, setState] = useState({
    name: "Pranay",
    data: [
      "BMW",
      "Ford",
      "Ferrari",
      "Bentley",
      "Audi",
      "Mercedes",
      "Lamborghini",
      "Porsche"
    ],
    isListFiltered: false
  });

  const updateFilterFlag = (flag) => {
    setState({ ...list, isListFiltered: flag });
  };

  const { name, data, isListFiltered } = list;
  return (
    <div className="Center">
      <Hello name={name} />
      <List data={data} checkIfFiltered={(val) => updateFilterFlag(val)} />
      <h3>`{`Is List Filtered ? - ${isListFiltered}`}</h3>
    </div>
  );
};

export default Application;
