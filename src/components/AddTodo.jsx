import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    onAddTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}
