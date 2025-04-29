import close from "../../assets/icons/Close.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { toggleTodoStatus } from "../../store/createSlace";

import { removeTodo } from "../../store/createSlace"; 

import active from "../../assets/image/active.png";
interface ITodo {
  id: number;
  title: string;
  isHidi: boolean;
}

interface TodoCardProps {
  todo: ITodo;
}

export function TodoCard({ todo }: TodoCardProps) {
  const dispatch = useDispatch<AppDispatch>();
 
  
  return (
    <div
      className="w-full p-4 flex justify-between items-center border-b"
      style={{ borderColor: "#E3E4F1" }}
    >
      <div className="flex gap-8">
        <div
          onClick={() => dispatch(toggleTodoStatus({ id: todo.id, currentStatus: todo.isHidi }))}

          className="w-6 h-6 rounded-4xl border-2 border-[#0000002f] cursor-pointer"
        >
          {
            todo.isHidi?<img src={ active} alt="" />:""
          }
        </div>
        <h3 className={todo.isHidi ? "line-through text-[#00000050]" : ""}>{todo.title}</h3>
      </div>

      <button
        className="cursor-pointer w-3 h-3"
        onClick={() => dispatch(removeTodo(todo.id))} 
      >
        <img src={close} alt="Close" />
      </button>
    </div>
  );
}
