import React from 'react';
import { useRecoilValue } from 'recoil';
import { getListSelector } from '../../recoil/list';
import ListItem from '../ListItem';
import { ListWrapper } from './List.style';

const List = () => {
  const list = useRecoilValue(getListSelector);

  return (
    <ListWrapper>
      {list.map((item: any) => {
        const { id, name } = item;
        return <ListItem key={id} name={name} />;
      })}
    </ListWrapper>
  );
};

export default List;
