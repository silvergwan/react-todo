import { useState } from "react";
import eat from "../assets/eat.png";
import noteat from "../assets/noteat.png";

export default function ImgChange() {
  const [minju, setMinju] = useState(noteat);

  const toggleImage = () => {
    setMinju((prev) => (prev === noteat ? eat : noteat));
  };

  return (
    <div>
      <img src={minju} alt="민주 상태" />
      <button onClick={toggleImage}>상태 변경</button>
    </div>
  );
}
