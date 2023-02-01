import './App.css';
import CounterView from './features/counter/Counter';

// import Counter from './components/Counter';
// import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      {/* <h1>Counter App with React-Redux</h1> */}
      {/* <Counter /> */}

      {/* <h1>Todo-App with React-Redux</h1>
      <Todos /> */}

      <h1>Todo-App with Redux-Toolkit</h1>
      <CounterView />
    </div>
  );
}

export default App;
