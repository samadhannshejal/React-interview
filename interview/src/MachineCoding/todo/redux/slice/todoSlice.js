import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  filter:"All"
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const obj = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(obj);
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggelTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    filterTodo:(state,action)=>{
      const filter=action.payload;
       state.filter=filter;
     
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, loadTodos, toggelTodo ,filterTodo} =
  todoSlice.actions;
export default todoSlice.reducer;
