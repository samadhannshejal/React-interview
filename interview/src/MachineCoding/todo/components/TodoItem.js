import React, { useState } from "react";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";


import { deleteTodo, editTodo, toggelTodo } from "../redux/slice/todoSlice";

const TodoItem = ({ element }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(element.text);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleDelete = () => {
    dispatch(deleteTodo(element));
  };
  const handleSave = () => {
    dispatch(editTodo({ id: element.id, text }));
    setIsEdit(false);
  };
  const handleToggle = () => {
    dispatch(toggelTodo( element.id ));
  };
  return (
    <>
      <td>
        {isEdit ? (
          <>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSave}>
              <FaCheck />
            </button>
            <button onClick={() => setIsEdit(false)}>
              <FaTimes />
            </button>
          </>
        ) : (
          <button onClick={handleEdit}>
            <FaEdit />
          </button>
        )}
      </td>
      <td>
        {!isEdit && (
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        )}
      </td>
      <td>
        <button onClick={handleToggle} style={{color : element.completed  ? 'green' : 'black'}}>
          {element.completed ? "Completed" : "Incomplete"}
        </button>
      </td>
    </>
  );
};

export default TodoItem;
