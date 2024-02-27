import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// PayloadAction = action.payload 필드의 타입을 지정할 수 있게 해주는 제네릭이다.

export interface TodoState {
  todoLists: string[];
}

const initialState: TodoState = {
  todoLists: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoLists: (state, action: PayloadAction<string[]>) => {
      state.todoLists = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setTodoLists } = todoSlice.actions;
