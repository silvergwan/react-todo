import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "김민주랑 노들섬 피크닉",
    },
    {
      id: 2,
      title: "안유진과 청계천 산책",
    },
  ]);

  return (
    <div>
      <h1>투두리스트</h1>
      {todos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
