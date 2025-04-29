import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Haider from "./component/Headir/Headir";
import { TodoForm } from "./component/TodoForm/TodoForm";
import { getTodo } from "./store/createSlace";
import { AppDispatch } from "./store/store";
import "./App.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <>
      <Haider />
      <div className="w-full max-w-[550px] mx-auto mt-15">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
