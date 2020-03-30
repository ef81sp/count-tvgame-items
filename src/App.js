import React, { useState } from 'react';
import Input from './Input';
import Items from './Items';

function App() {
  const [items, updateItems] = useState([
    { name: 'てっこうせき', max: 5, now: 1 }
  ]);
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
          if (items.find(i => i.name === name)) {
            alert('もうあります');
            return;
          }
          updateItems([...items, { name, max, now: 0 }]);
        }}
      />
      <Items
        items={items}
        onClickPlus={i => {
          const { name, max, now } = items[i];
          const newItems = [...items];
          newItems.splice(i, 1, { name, max, now: now + 1 });
          updateItems(newItems);
        }}
        onClickMinus={i => {
          const { name, max, now } = items[i];
          const newItems = [...items];
          newItems.splice(i, 1, { name, max, now: now - 1 });
          updateItems(newItems);
        }}
        onClickDelete={i => {
          const newItems = [...items];
          newItems.splice(i, 1);
          updateItems(newItems);
        }}
      />
    </div>
  );
}

export default App;
