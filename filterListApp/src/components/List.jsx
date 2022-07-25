const List = ({ data }) => {
  return (
    <>
      <h2>List is shown as below</h2>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
