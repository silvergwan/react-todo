import UserCard from "./components/UserCard";
import MenuList from "./components/MenuList";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <UserCard name="은관" job="dev" />
      <MenuList />
      <Message isLoggedIn={false} />
    </div>
  );
}

export default App;
