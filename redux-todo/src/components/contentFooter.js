import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeActive,
  clearCompleted,
  selectTodos,
} from '../redux/todos/todosSlice';
function ContentFooter() {
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {itemsLeft} </strong>
        item{itemsLeft > 1 ? 's' : undefined} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="/#"
            className={activeFilter === 'all' ? 'selected' : undefined}
            onClick={() => dispatch(changeActive('all'))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === 'active' ? 'selected' : undefined}
            onClick={() => dispatch(changeActive('active'))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === 'completed' ? 'selected' : undefined}
            onClick={() => dispatch(changeActive('completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() =>
          window.confirm('Are you sure?')
            ? dispatch(clearCompleted())
            : undefined
        }
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
