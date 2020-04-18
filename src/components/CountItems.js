import React, { useState } from 'react';
import Input from './CountItemsInput';
import Items from './CountItemsItems';

function App() {
  const savedItems = localStorage.getItem('items');
  const [items, updateItems] = useState(
    JSON.parse(savedItems) || [{ name: 'てっこうせき', max: 5, now: 1 }]
  );
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
      <button
        onClick={() => {
          localStorage.setItem('items', JSON.stringify(items));
          alert('ほぞんしました');
        }}
      >
        <label>データを保存する</label>
      </button>
      <button
        onClick={() => {
          localStorage.removeItem('items');
          updateItems([]);
          alert('けしました');
        }}
      >
        <label>データを消す</label>
      </button>
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
