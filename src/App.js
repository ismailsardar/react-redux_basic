import './App.css';
import MyCounterView from './features/myCounter/MyCounterView';
// import CounterView from './features/counter/Counter';
// import Posts from './features/posts/Posts';
// import RabbilPages from './pages/RabbilPages';
// import ToDoPage from './pages/ToDoPage';

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
      {/* <CounterView /> */}
      {/* <h1>Fatch-API with Redux-Toolkit</h1>
      <Posts /> */}

      {/* Rabbil counter app */}
      {/* <RabbilPages /> */}
      {/* <ToDoPage /> */}

      {/* ismile project */}
      <MyCounterView />
    </div>
  );
}

export default App;
