import React from 'react';

function Item({
  index,
  name,
  now,
  max,
  onClickPlus,
  onClickMinus,
  onClickDelete
}) {
  return (
    <li>
      {name}
      {' .......... '}
      {now}
      {' / '}
      {max}
      <button onClick={() => onClickPlus(index)}>
        <label>+</label>
      </button>
      <button onClick={() => onClickMinus(index)}>
        <label>-</label>
      </button>
      {now >= max && '🎉'}
      <button onClick={() => onClickDelete(index)}>
        <label>削除</label>
      </button>
    </li>
  );
}

export default Item;
