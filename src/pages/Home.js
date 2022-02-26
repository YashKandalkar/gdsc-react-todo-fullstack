import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

const todoList = [
  {
    id: 1,
    title: "Complete maths homework.",
    completed: false,
  },
  {
    id: 2,
    title: "Complete science homework.",
    completed: false,
  },
  {
    id: 3,
    title: "Complete english homework. Complete english homework. Complete ",
    completed: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(todoList);
  const todoInput = useRef();

  const onAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    todoInput.current.value = "";
  };

  return (
    <div>
      <Navbar />
      <div className="pb-7" style={{ borderBottom: "1px #ddd solid" }}>
        <h1 className="text-2xl px-8 pt-6">Welcome, Yash Kandalkar!</h1>
        <p className="text-base px-8">
          Use this web app to create your to-do list!
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
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Home;
