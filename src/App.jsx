import './App.css';
import {TodoItem} from './TodoItem'

const TODO_DATA = [ {text: 'create a react app', done: true, description: 'learn the basics of create-react-app'},
{ text: 'tailwindcss', done: true, description: 'learn how to add tailwindcss to a react app'},
{ text: 'functionality', done: false, description: 'make this do something when clicked'}]

function App() {
  return (
    <div className="m-2">
      <h3 className="text-lg mb-4">Todo App</h3>
      <div className="ml-3 space-y-4">
        {TODO_DATA.map( item => 
          <TodoItem {...item} />
        )}
      </div>
    </div>
  );
}

export default App;
