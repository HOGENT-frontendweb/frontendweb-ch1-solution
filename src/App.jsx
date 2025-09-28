import { TodoItem } from './components/todos/TodoItem';
import TODO_DATA from './api/mock_data';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(TODO_DATA);
  const handleDone = (id) => {
    setTodos(todos.map((t)=> t.id===id? {...t, done:!t.done} : t));
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo App</h1>

      <ul className="space-y-2">
        {todos.map((item) =>
          <TodoItem key={item.id} {...item} onChangeChecked={handleDone} />,
        )}
      </ul>
    </div>
  );
}

export default App;
