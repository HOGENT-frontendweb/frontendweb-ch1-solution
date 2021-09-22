import './App.css';
import {TodoItem} from './TodoItem'


function App() {
  return (
    <div className="m-2">
      <h3 className="text-lg">Todo App</h3>
      <TodoItem text="my first todo" />
    </div>
  );
}

export default App;
