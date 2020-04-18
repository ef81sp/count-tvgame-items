import React from 'react';
import Item from './CountItemsItem';

function Items({ items, onClickPlus, onClickMinus, onClickDelete }) {
  return (
    <ul>
      {items.map(({ name, max, now }, index) => (
        <Item
          key={index}
          index={index}
          name={name}
          max={max}
          now={now}
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          onClickDelete={onClickDelete}
        />
      ))}
    </ul>
  );
}

export default Items;
