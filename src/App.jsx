import { TodoItem } from './components/todos/TodoItem';
import TODO_DATA from './api/mock_data';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo App</h1>

      <ul className="space-y-2">
        {TODO_DATA.map((item) =>
          <TodoItem key={item.id} {...item} />,
        )}
      </ul>
    </div>
  );
}

export default App;
