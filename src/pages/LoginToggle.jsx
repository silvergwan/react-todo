import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>환영합니다</p>
          <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
        </>
      ) : (
        <>
          <p>로그인이 필요합니다</p>
          <button onClick={() => setIsLoggedIn(true)}>로그인</button>
        </>
      )}
    </div>
  );
}

export default LoginToggle;
