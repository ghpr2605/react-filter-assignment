import "../styles.css";

const Home = () => {
  return (
    <div className="Center">
      <h1>React App</h1>
      <h4>
        This is simple project covering below points :
        <ul>
          <li>Add parent component to hold data</li>
          <li>Pass data from parent to child component</li>
          <li>Display data received in the form of list</li>
          <li>Provide textbox to filter list</li>
          <li>Maintain one flag in parent and update it from child</li>
        </ul>
      </h4>
    </div>
  );
};

export default Home;
