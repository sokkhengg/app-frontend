import React from "react";

const TodosList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}

          />
          <div>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default TodosList;
