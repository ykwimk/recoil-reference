import React from 'react';
import { useRecoilValue } from 'recoil';
import { getListSelector } from '../../recoil/list';
import ListItem from '../ListItem';
import { ListWrapper } from './List.style';

const List = () => {
  const list = useRecoilValue(getListSelector({ perPage: 10, page: 1 }));

  return (
    <ListWrapper>
      {list.map((item: any) => {
        const { id, name, image_url } = item;
        return <ListItem key={id} name={name} imageUrl={image_url} />;
      })}
    </ListWrapper>
  );
};

export default List;
