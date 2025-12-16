function App() {
  function Greeting({ name }) {
    return <h2>Hello {name}</h2>;
  }

  return (
    <>
      <Greeting name="은관" />
    </>
  );
}

export default App;
