import React, { useState } from 'react';

function Input(props) {
  const [name, setName] = useState('');
  const [max, setMax] = useState(0);
  return (
    <div>
      <label htmlFor="name">なまえ</label> /{' '}
      <label htmlFor="number">もくひょうすう</label>
      <br></br>
      <input
        id="name"
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="かたいもくざい"
        value={name}
      />
      {' / '}
      <input
        id="number"
        type="number"
        onChange={e => setMax(Number(e.target.value) || "")}
        value={max}
      />
      <button
        onClick={() => {
          props.onClick({ name, max });
          setName('');
          setMax(0);
        }}
      >
        <label>追加する</label>
      </button>
      <button
        onClick={() => {
          setName('');
          setMax(0);
        }}
      >
        <label>クリア</label>
      </button>
    </div>
  );
}

export default Input;
