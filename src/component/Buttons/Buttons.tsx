import { Dispatch, SetStateAction } from "react";
import { addTodo, clearTodo, getTodo } from "../../store/createSlace";
import {useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
interface ButtonsProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export function Buttons({ state, setState }: ButtonsProps) {
  const dispatch = useDispatch<AppDispatch>();

  function addTodoCount() {
    if (state.trim() !== "") {
      dispatch(addTodo(state));
      setState("");
    }
  }

  function gettTodoCount() {
    dispatch(getTodo());
  }

  return (
    <div className="w-full max-w-[400px] flex justify-between">
      <button className="cursor-pointer" onClick={addTodoCount}>
        Add Todo
      </button>
      <button className="cursor-pointer" onClick={gettTodoCount}>
        Get Todo
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          dispatch(clearTodo());
        }}
      >
        Clear Todos
      </button>
    </div>
  );
}
