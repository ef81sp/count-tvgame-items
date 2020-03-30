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
      <button onClick={() => onClickPlus(name)}>
        <label>+</label>
      </button>
      <button onClick={() => onClickMinus(name)}>
        <label>-</label>
      </button>
      {now >= max && '🎉'}
      <button onClick={() => onClickDelete(name)}>
        <label>削除</label>
      </button>
    </li>
  );
}

export default Item;
