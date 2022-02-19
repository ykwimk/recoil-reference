import React from 'react';
import { TodoInputWrapper } from './TodoInput.style';

const TodoInput = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <TodoInputWrapper>
      <form onSubmit={onSubmit}>
        <div className="todo-input-wrap">
          <input type="text" className="todo-input" />
          <button type="submit" className="todo-input-button">
            Submit
          </button>
        </div>
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInput;
