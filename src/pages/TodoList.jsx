import { useState } from "react";
import AddTodo from "../components/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "김민주랑 노들섬 피크닉" },
    { id: 2, title: "안유진과 청계천 산책" },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <h1>투두리스트</h1>

      <AddTodo onAddTodo={addTodo} />

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
