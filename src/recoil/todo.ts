import { atom } from 'recoil';

export interface TodoListStateType {
  id: number;
  text: string;
}

export const todoInputState = atom<string>({
  key: 'todoState',
  default: '',
});

export const todoListState = atom<TodoListStateType[]>({
  key: 'todoListState',
  default: [],
});
