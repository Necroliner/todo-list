import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo"
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onSubmit={handleSubmit}>Add</button>
    </form>
  );

}

export default TodoForm;