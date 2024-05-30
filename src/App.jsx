import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./slices/counterSlices";
import { addTodo } from "./slices/todoSlices";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, settodo] = useState("");
  // const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    settodo(e.target.value);
  };

  const handleClick = () => {
    if (todo === "") alert("please entre the details");
    dispatch(addTodo(todo));
    settodo("");
  };

  return (
    // <>
    //   <div className="card">
    //     <p>{state.count}</p>
    //     <button onClick={() => dispatch(increment())}>Increase</button>
    //     <button onClick={() => dispatch(decrement())}>Decrease</button>
    //     <button onClick={() => dispatch(reset())}>Reset</button>
    //   </div>
    // </>
    <section className="w-screen h-screen relative flex justify-center items-center">
      <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="flex flex-col gap-5 bg-gray-800 back rounded-md p-10">
          <h1 className="font font-sans font-bold text-center">Todo List</h1>
          <div className="flex gap-2">
            <input
              className="pl-4 rounded-md"
              type="text"
              placeholder="search"
              value={todo}
              onChange={handleInput}
            />
            <button onClick={handleClick}>Add Task</button>
          </div>
          <ul className="w-full flex flex-col justify-center items-center">
            <TodoList />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
