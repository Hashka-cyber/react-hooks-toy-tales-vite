function Header({ onToggleForm }) {
  return (
    <header className="header">
      <h1>Toy Tales</h1>

      <button onClick={onToggleForm}>
        Add a Toy
      </button>
    </header>
  );
}

export default Header;