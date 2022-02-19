import React from 'react';
import TodoListItem from '../TodoListItem';
import { TodoListWrapper } from './TodoList.style';

const TodoList = () => {
  return (
    <TodoListWrapper>
      <TodoListItem />
    </TodoListWrapper>
  );
};

export default TodoList;
