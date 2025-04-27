import { useDispatch } from "react-redux"; 
import { addTodo, clearTodo } from "../../store/createSlace"; 
import { Dispatch, SetStateAction } from "react";

interface ButtonsProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export function Buttons({ state, setState }: ButtonsProps) {
  const dispatch = useDispatch();

  function addTodoCount() {
    if (state.trim() !== "") {
      dispatch(addTodo(state));
      setState("");
    }
  }

  return (
    <div className="w-full max-w-[400px] flex justify-between ">
      <button className="cursor-pointer" onClick={addTodoCount}>Add Todo</button>
      <button className="cursor-pointer" onClick={()=>{dispatch(clearTodo())}}>Clear Todos</button>
    </div>
  );
}
