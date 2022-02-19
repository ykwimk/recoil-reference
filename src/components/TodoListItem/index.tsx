import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, TodoListStateType } from '../../recoil/todo';
import { TodoListItemWrapper } from './TodoListItem.style';

interface TodoListItemPropsType {
  id: number;
  text: string;
}

const TodoListItem = ({ id, text }: TodoListItemPropsType) => {
  const [todoList, setTodoList] =
    useRecoilState<TodoListStateType[]>(todoListState);

  const onClickTodoListItem = () => {
    const filteredTodoList = todoList.filter((o) => o.id !== id);
    setTodoList([...filteredTodoList]);
  };

  return (
    <TodoListItemWrapper>
      {text}
      <button type="button" onClick={onClickTodoListItem}>
        삭제
      </button>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;
