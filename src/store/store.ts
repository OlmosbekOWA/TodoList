import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./createSlace"; // ✅ to‘g‘ri



export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
