// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markAsCompleted } from "../slices/todoSlices";

const TodoList = () => {
  const state = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const DeleteItem = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleCheckBox = (id) => {
    dispatch(markAsCompleted(id));
  };
  return (
    <div>
      {state.map((todo) => (
        <li
          key={todo.id}
          className="flex gap-5 items-center justify-between w-full py-2"
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleCheckBox(todo.id)}
            className="w-1/12"
          />
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            className="w-10/12 capitalize"
          >
            {todo.task}
          </span>
          <button onClick={() => DeleteItem(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
