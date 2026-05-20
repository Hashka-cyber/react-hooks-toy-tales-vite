function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <h1>Toy Tales</h1>

      <button
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add Toy"}
      </button>
    </header>
  );
}

export default Header;