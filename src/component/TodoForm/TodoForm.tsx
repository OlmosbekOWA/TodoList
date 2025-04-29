import { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Buttons } from "../Buttons/Buttons";
import { TodoCard } from "../TodoCard/TodoCard";
import { RootState } from "../../store/store";






export function TodoForm() {
  const [state, setState] = useState<string>("");
  const todos = useSelector((store: RootState) => store.todos.todos);
  console.log(todos);
  
 
  
  



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  
  

  return (
    <div className="mx-auto w-full flex flex-col ">
      <div className="w-full mb-10" >
        <input
          value={state}
          onChange={handleChange}
          type="text"
          name="title"
          className="p-4 w-full border-0 outline-0 bg-white"
          placeholder="Create a new todo…"
        />
      </div>

      
      <div className="shadow-custom bg-white "
        style={{
          boxShadow: "0px 35px 50px -15px #C2C3D680"
        }}>
        <div className="w-full flex flex-col gap-2">
        {
          
          
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}

        </div>

        <div className="p-5 w-full flex items-center justify-center">
          <Buttons setState={setState} state={state} />
        </div>
      </div>
    </div>
  );
}
