export default function Message({ isLoggedIn }) {
  return <p>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</p>;
}
