export function TodoItem({
  text,
  done,
  description,
}) {
  return (
    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start space-x-3">
        <input
          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
          type="checkbox"
          checked={done}
          readOnly
        />
        <label className="flex-1">
          <div className='font-semibold text-gray-800'>
            {text}
          </div>
          <div className='text-sm mt-1 text-gray-600'>
            {description}
          </div>
        </label>
      </div>
    </li>
  );
}
