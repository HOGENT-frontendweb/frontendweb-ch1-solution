export function TodoItem({
  text,
  done,
  description
}) {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" checked={done}/>
        <label className="form-check-label">
          <b>{text}</b><br/>
          {description}
        </label>
      </div>
    </li>
  );
}
