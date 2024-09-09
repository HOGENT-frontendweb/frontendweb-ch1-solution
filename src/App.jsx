import { TodoItem } from './components/todos/TodoItem';
import TODO_DATA from './api/mock_data';

function App() {
  return (
    <div className="container m-4">
      <h1>Todo App</h1>

      <ul className="list-group">
        {TODO_DATA.map((item) => 
          <TodoItem key={item.id} {...item} />,
        )}
      </ul>
    </div>
  );
}

export default App;
