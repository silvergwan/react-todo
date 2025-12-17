import React from "react";
import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </div>
  );
}
