import React from 'react';
import { ListItemWrapper } from './ListItem.style';

interface ListItemPropsType {
  name: string;
  imageUrl: string;
}

const ListItem = ({ name, imageUrl }: ListItemPropsType) => {
  return (
    <ListItemWrapper>
      <div className="list-item-wrap">
        <div className="image">
          <img src={imageUrl} />
        </div>
        <div className="list-item-name">{name}</div>
      </div>
    </ListItemWrapper>
  );
};

export default ListItem;
