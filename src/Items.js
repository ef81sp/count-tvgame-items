import React from 'react';
import Item from './Item';

function Items({ items, onClickPlus, onClickMinus, onClickDelete }) {
  return (
    <ul>
      {Object.entries(items).map(([name, number], index) => (
        <Item
          key={index}
          name={name}
          max={number.max}
          now={number.now}
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          onClickDelete={onClickDelete}
        />
      ))}
    </ul>
  );
}

export default Items;
