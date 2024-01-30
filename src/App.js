// import './App.css';
import Navigate from './components/navbar';
import Todo from './components/Todo';

function App() {
  return (
    <>
      {/* <head>
      </head> */}
      <div>
        <Navigate />
        <h1>My Todos</h1>
        <div className="container">
          <Todo title={"Card 1"} />
          <Todo title={"Card 2"} />
          <Todo title={"Card 3"} />
          <Todo title={"Card 4"} />
          <Todo title={"Card 5"} />
          <Todo title={"Card 6"} />
        </div>
      </div>
    </>
  );
}

export default App;
