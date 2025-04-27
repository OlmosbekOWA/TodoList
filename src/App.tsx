import Haider from "./component/Headir/Headir";
import { TodoForm } from "./component/TodoForm/TodoForm";

import "./App.css";

function App() {
  return (
    <>
      <Haider />
      <div className="w-full max-w-[550px]  mx-auto mt-15">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
