import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Die6 from './RollDiceDie6';

function RollDice() {
  const [num, setNum] = useState(1);
  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const id = setInterval(() => {
              setNum(getRandomInt6());
            }, 70);
            setTimeout(() => clearInterval(id), 260);
          }}
        >
          1D6
        </Button>
      </div>
      <Die6 num={num} />
    </div>
  );
}

function getRandomInt6() {
  return getRandomInt(6);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

export default RollDice;
