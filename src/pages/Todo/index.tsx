import React from 'react';
import Header from '../../components/Header';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const Todo = () => {
  return (
    <>
      <Header />
      <TodoInput />
      <TodoList />
    </>
  );
};

export default Todo;
