import React from 'react';
import { useRecoilState } from 'recoil';
import {
  todoInputState,
  todoListState,
  TodoListStateType,
} from '../../recoil/todo';
import { TodoInputWrapper } from './TodoInput.style';

const TodoInput = () => {
  const [inputState, setInputState] = useRecoilState<string>(todoInputState);
  const [todoList, setTodoList] =
    useRecoilState<TodoListStateType[]>(todoListState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = {
      id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0,
      text: inputState,
    };
    setTodoList([...todoList, todo]);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  return (
    <TodoInputWrapper>
      <form onSubmit={onSubmit}>
        <div className="todo-input-wrap">
          <input type="text" className="todo-input" onChange={onChangeInput} />
          <button type="submit" className="todo-input-button">
            Submit
          </button>
        </div>
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInput;
