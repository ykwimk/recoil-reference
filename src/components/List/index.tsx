import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getListSelector } from '../../recoil/list';
import ListItem from '../ListItem';
import { ListWrapper } from './List.style';

const List = () => {
  const listLoadable = useRecoilValueLoadable(getListSelector);

  switch (listLoadable.state) {
    case 'hasValue': {
      return (
        <ListWrapper>
          {listLoadable.contents.map((item: any) => {
            const { id, name, image_url } = item;
            return <ListItem key={id} name={name} imageUrl={image_url} />;
          })}
        </ListWrapper>
      );
    }
    case 'loading': {
      return <div>loading...</div>;
    }
    case 'hasError': {
      throw listLoadable.contents;
    }
  }
};

export default List;
