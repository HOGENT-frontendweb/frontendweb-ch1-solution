export function TodoItem(props) {
  const text = props.text;
  return (
    <div>
      <input className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" type="checkbox"/>
      <label className="ml-1 font-medium text-gray-700">
        {text}
      </label>
    </div>)

}
