import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./MachineCoding/todo/redux/store/store";
import { Provider } from "react-redux";
import { loadTodos } from "./MachineCoding/todo/redux/slice/todoSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));

const loadState = () => {
  const serilizedState = localStorage.getItem("todos");
  return JSON.parse(serilizedState);
};
const uploadToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todos));
};
store.subscribe(() => {
  uploadToLocalStorage(store.getState().todo);
});
const persistState = loadState();
if(persistState)store.dispatch(loadTodos(persistState))  // return  data to store 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
