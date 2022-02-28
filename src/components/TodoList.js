import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, userData }) => {
  // const onChange = (id, data) => {
  //   setTodos(
  //     todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
  //   );
  // };

  const onDelete = (id) => {
    fetch("/deleteNote", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "deleted") {
          setTodos(todos.filter((todo) => todo._id !== id));
        }
      });
  };

  const onChange = (data) => {
    fetch("/updateNote", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, userId: userData._id }),
    })
      .then((res) => res.text())
      .then((resData) => {
        if (resData === "updated") {
          setTodos(
            todos.map((todo) =>
              todo._id === data._id ? { ...todo, ...data } : todo
            )
          );
        }
      });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
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
