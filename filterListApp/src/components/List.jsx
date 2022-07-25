const List = ({ data }) => {
  return (
    <>
      <h2>List is shown as below</h2>
      <ul>
        {data.map((item, index) => {
          return <li key={`${index}_${item}`}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
