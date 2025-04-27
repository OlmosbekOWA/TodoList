import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  isHidi: boolean;
}

interface InitialState {
  todos: Todo[];
  status: string;
}


const loadTodosFromLocalStorage = (): Todo[] => {
  try {
    const todos = localStorage.getItem('todos');
    if (todos) {
      return JSON.parse(todos);
    }
    return [];
  } catch (error) {
    console.error("Failed to load todos:", error);
    return [];
  }
};

const initialState: InitialState = {
  todos: loadTodosFromLocalStorage(),
  status: "todos",
};

export const todoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift({
        id: Math.floor(Math.random() * 1000),
        title: action.payload,
        isHidi: false,
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<number | string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    clearTodo: (state) => {
      state.todos = [];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    activeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isHidi = !todo.isHidi;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, clearTodo, activeTodo } = todoSlice.actions;
export default todoSlice.reducer;
