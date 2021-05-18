// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <h3>Todo List</h3>
      {/* <TodoForm/> */}
      <TodoList/>
      
    </div>
  );
}

export default App;
