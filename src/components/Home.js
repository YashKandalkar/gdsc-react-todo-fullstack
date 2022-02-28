import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

const Home = ({ userData }) => {
  const [todos, setTodos] = useState([]);
  const todoInput = useRef();

  useEffect(() => {
    fetch("/getNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userData._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTodos(data.reverse());
        }
      });
  }, [userData._id]);

  const onAddTodo = (title) => {
    if (title === "") {
      return alert("Please enter a todo!");
    }
    const data = {
      userId: userData._id,
      title,
      completed: false,
    };

    fetch("/addNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([data, ...todos]);
      });

    // setTodos([data, ...todos]);
    todoInput.current.value = "";
  };

  return (
    <div>
      <div className="pb-7" style={{ borderBottom: "1px #ddd solid" }}>
        <h1 className="text-2xl px-8 pt-6"> Welcome, {userData.name}! </h1>
        <p className="text-base px-8">
          Use this web app to create your to - do list!
        </p>
      </div>
      <div className="flex w-full flex-col items-center mt-6">
        <div>
          <div className="text-left items-start flex">
            <label className="block text-xl text-sky-900" htmlFor="addTodo">
              Add a todo!
            </label>
          </div>
          <div className="flex flex-row items-stretch">
            <input
              id="addTodo"
              ref={todoInput}
              className="border-2 border-sky-700 px-2 rounded-tl-md rounded-bl-md"
              placeholder="Complete maths homeword."
            />
            <button
              onClick={() => onAddTodo(todoInput.current.value)}
              className="bg-sky-700 py-2 h-full text-gray-50 px-8 rounded-tr-md rounded-br-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <TodoList userData={userData} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Home;
