import styled from 'styled-components';

export const TodoInputWrapper = styled('div')`
  .todo-input-wrap {
    display: flex;
    justify-content: center;
  }
  .todo-input {
    width: 350px;
    height: 32px;
    font-size: 15px;
    padding: 0 7px;
    outline: 0;
  }
  .todo-input-button {
    width: 75px;
    line-height: 34px;
    border: 0;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;
