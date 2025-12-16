import UserCard from "./components/UserCard";
import MenuList from "./components/MenuList";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <UserCard name="은관" job="dev" />
      <MenuList />
      <Message isLoggedIn={false} />
      <Button text="확인" />
    </div>
  );
}

export default App;
