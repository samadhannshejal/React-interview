import React from "react";
import Loading from "../../Loading";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const RenderTodo = () => {
  const { filter } = useSelector((state) => state.todo);
  const { todos } = useSelector((state) => state.todo);
  const filterTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    else if (filter === "Active") return !todo.completed
    return true;
  });

  if (!todos) {
    return <Loading loading={true} />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>task Name</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filterTodos.map((todo) => (
          <tr key={todo.id}>
            <td style={{ color: todo.completed ? "green" : "black" }}>
              {todo.text}
            </td>
            <TodoItem element={todo} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RenderTodo;
