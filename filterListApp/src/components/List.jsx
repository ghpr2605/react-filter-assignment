import { useState } from "react";

const List = ({ data }) => {
  const [list, updateList] = useState(data);
  const filterList = (event) => {
    const keyWord = event.target.value;
    const filteredList = keyWord
      ? list.filter((item) => {
          return item.includes(keyWord);
        })
      : data;

    updateList(filteredList);
  };

  return (
    <>
      <h2>Text box for filter</h2>
      <input
        type="text"
        placeholder="Enter key word for filter"
        onChange={filterList}
      />
      <h2>List is shown as below</h2>
      <ul>
        {list.map((item, index) => {
          return <li key={`${index}_${item}`}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
