import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState, TodoListStateType } from '../../recoil/todo';
import TodoListItem from '../TodoListItem';
import { TodoListWrapper } from './TodoList.style';

const TodoList = () => {
  const todoList = useRecoilValue<TodoListStateType[]>(todoListState);

  return (
    <TodoListWrapper>
      {todoList.map((item) => {
        const { id, text } = item;
        return <TodoListItem key={id} id={id} text={text} />;
      })}
    </TodoListWrapper>
  );
};

export default TodoList;
