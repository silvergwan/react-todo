export default function Card({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      <div>{children}</div>
    </>
  );
}
