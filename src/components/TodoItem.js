import React from "react";

const TodoItem = ({ _id, title, completed, onChange, onDelete }) => {
  return (
    <div className="flex flex-row items-center w-96 max-w-md bg-gray-100 px-6 py-4 rounded-md">
      <input
        type="checkbox"
        value={"completed"}
        checked={completed}
        className="mr-2"
        onChange={() => onChange({ _id, title, completed: !completed })}
      />
      <p className={`mr-2 ${completed ? "line-through" : ""}`}>{title}</p>
      <button
        className="text-red-500 bg-red-100 px-4 py-2 rounded-md ml-auto"
        onClick={() => onDelete(_id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
