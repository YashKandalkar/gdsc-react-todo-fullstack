import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const onChange = (id, data) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
