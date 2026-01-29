import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My React Project</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </nav>
      </header>

      <main className="main">
        <h2>Welcome</h2>
        <p>
          This is a simple React layout made as a homework project.
        </p>

        <div className="cards">
          <div className="card">Block 1</div>
          <div className="card">Block 2</div>
          <div className="card">Block 3</div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 React homework</p>
      </footer>
    </div>
  );
}

export default App;
