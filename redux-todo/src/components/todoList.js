import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggle,
  destroy,
  selectFilteredTodos,
} from '../redux/todos/todosSlice';

function TodoList() {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(destroy(id));
    }
  };

  return (
    <ul className="todo-list">
      {filteredItems.map((item) => {
        return (
          <li
            key={item.id}
            className={item.completed ? 'completed' : undefined}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggle({ id: item.id }))}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => handleDestroy(item.id)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
