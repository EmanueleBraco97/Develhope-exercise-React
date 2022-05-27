import './App.css';

function App() {
  const hello= <h1>Hello</h1>


  const myFunction = (name) => <h2>Hello, {name}</h2>

  return (
    <div className="App">
      {hello}
      
      {myFunction('Mario')}
    </div>
  );
}

export default App;
