import UserCard from "./components/UserCard";
import MenuList from "./components/MenuList";
import Message from "./components/Message";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <UserCard name="은관" job="dev" />
      <MenuList />
      <Message isLoggedIn={false} />
      <Button text="확인" />
      <Card title="일정">
        <p>전 아이즈원 멤버 김민주 님과의 데이트</p>
      </Card>
    </div>
  );
}

export default App;
