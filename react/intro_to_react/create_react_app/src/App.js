import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/meme" method="post">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="form-control" />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
