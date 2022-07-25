import "../styles.css";
import { useState } from "react";
import Hello from "./Hello";
import List from "./List";

const Application = () => {
  const [list] = useState({
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
    ]
  });

  const { name, data } = list;
  return (
    <div className="Center">
      <Hello name={name} />
      <List data={data} />
    </div>
  );
};

export default Application;
