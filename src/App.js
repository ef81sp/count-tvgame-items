import React, { useState } from 'react';
import Input from './Input';
import Items from './Items';

function App() {
  const [items, updateItems] = useState({ てっこうせき: { max: 5, now: 1 } });
  return (
    <div>
      <header>
        <h1>アイテムとかカウントするやつ</h1>
      </header>
      <Input
        onClick={({ name, max }) => {
          if (!name) {
            alert('なまえいれてください');
            return;
          }
          if (Object.keys(items).includes(name)) {
            alert('もうあります');
            return;
          }
          updateItems({ ...items, [name]: { max, now: 0 } });
        }}
      />
      <Items
        items={items}
        onClickPlus={name => {
          const item = items[name];
          updateItems({
            ...items,
            [name]: { max: item.max, now: item.now + 1 }
          });
        }}
        onClickMinus={name => {
          const item = items[name];
          updateItems({
            ...items,
            [name]: { max: item.max, now: item.now - 1 }
          });
        }}
        onClickDelete={name => {
          const newItems = { ...items };
          delete newItems[name];
          updateItems(newItems);
        }}
      />
    </div>
  );
}

export default App;
