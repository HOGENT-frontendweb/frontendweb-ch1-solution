export function TodoItem({
  text,
  done,
  description
}) {
  return (
    <div className="item">
      <div className="ui checkbox">
        <input type="checkbox" checked={done} />
        <label>
          <b>{text}</b><br/>
          {description}
        </label>
      </div>
    </div>
  );
}
