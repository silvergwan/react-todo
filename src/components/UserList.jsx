import UserItem from "./UserItem";

function UserList() {
  const users = [
    { id: 1, name: "민주", age: 20 },
    { id: 2, name: "은관", age: 18 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}

export default UserList;
