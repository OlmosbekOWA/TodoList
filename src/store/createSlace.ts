import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  isHidi: boolean;
}

interface InitialState {
  todos: Todo[];
  status: "idle" | "pending" | "succeeded" | "failed" | "rejected";
}

const initialState: InitialState = {
  todos: [],
  status: "idle",
};


export const getTodo = createAsyncThunk("todos/getTodos", async () => {
  const res = await fetch("https://291cbb7febebe978.mokky.dev/todo");
  const data = await res.json();
  return data;
});


export const addTodo = createAsyncThunk("todos/addTodos", async (title: string) => {
  const res = await fetch("https://291cbb7febebe978.mokky.dev/todo", {
    method: "POST",
    body: JSON.stringify({
      title,
      isHidi: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
});


export const removeTodo = createAsyncThunk("todos/removeTodo", async (id: number) => {
  await fetch(`https://291cbb7febebe978.mokky.dev/todo/${id}`, {
    method: "DELETE",
  });
  return id;
});


export const toggleTodoStatus = createAsyncThunk(
  "todos/toggleTodoStatus",
  async ({ id, currentStatus }: { id: number; currentStatus: boolean }) => {
    const res = await fetch(`https://291cbb7febebe978.mokky.dev/todo/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isHidi: !currentStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(getTodo.rejected, (state) => {
        state.status = "rejected";
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos.push(action.payload);
      })

      .addCase(removeTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })

      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        const todo = state.todos.find((t) => t.id === updated.id);
        if (todo) {
          todo.isHidi = updated.isHidi;
        }
      });
  },
});

export const { clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
