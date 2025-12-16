const menus = ["Home", "About", "Contact"];

export default function MenuList() {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu}>{menu}</li>
      ))}
    </ul>
  );
}
