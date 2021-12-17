import React from 'react';
import TodoList from './todoList';
import ContentFooter from './contentFooter';

function content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList />
      </section>
      <ContentFooter />
    </>
  );
}

export default content;
