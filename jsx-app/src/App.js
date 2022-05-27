import './App.css';

function App() {
  const hello= <h1>Hello</h1>

  const myFunction = (name) => <h2>Hello, {name}</h2>

  const sum = (a,b) => {
    return <h2>{a+b}</h2>
  }
  // const result= <h2>{sum(10,20)}</h2>

  return (
    <div className="App">

      {hello}  
      
      {myFunction('Mario')}

      {sum(10,20)}
    </div>
  );
}

export default App;
