import {TodoItem} from './TodoItem'

const TODO_DATA = [{
  text: 'create a react app',
  done: true,
  description: 'learn the basics of create-react-app'
},
{
  text: 'tailwindcss',
  done: true,
  description: 'learn how to add tailwindcss to a react app'
},
{
  text: 'functionality',
  done: false,
  description: 'make this do something when clicked'
}];

function App() {
  return (
    <div className="ui container">
      <div className="ui basic segment">
        <h1 className="ui dividing header">Todo App</h1>
        <div className="ui relaxed divided list">
          {TODO_DATA.map( item => 
            <TodoItem {...item} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
