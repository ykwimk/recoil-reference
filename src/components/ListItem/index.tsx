import React from 'react';
import { ListItemWrapper } from './ListItem.style';

interface ListItemPropsType {
  name: string;
}

const ListItem = ({ name }: ListItemPropsType) => {
  return <ListItemWrapper>{name}</ListItemWrapper>;
};

export default ListItem;
