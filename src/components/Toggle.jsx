import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? "OFF" : "ON"}
      </button>

      {isOn && <p>켜졌습니다</p>}
    </div>
  );
}

export default Toggle;
