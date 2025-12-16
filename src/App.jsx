function App() {
  function Greeting(props) {
    return <h2>Hello {props.name}</h2>;
  }

  return (
    <>
      <Greeting name="은관" />
    </>
  );
}

export default App;
