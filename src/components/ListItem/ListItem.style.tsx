import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 15px;
  .list-item-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
    }
  }
`;
