export function TodoItem(props) {
  const {text, done, description } = props;
  return (
     <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={done}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            {text}
          </label>
          <p id="comments-description" className="text-gray-500">
            {description}
          </p>
        </div>
      </div>);

}
