import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

import Die6 from './RollDiceDie6';

const useStyles = makeStyles({
  slider: {
    marginTop: '3em',
  },
});

function RollDice() {
  const classes = useStyles();
  const [nums, setNums] = useState([3, 3, 4]);
  const [diceLength, setDiceLength] = useState(3);

  const rollingDice = (diceLength, max) => {
    const dice = [];
    dice.length = diceLength;
    dice.fill(1);
    const id = setInterval(() => {
      setNums(dice.map(() => getRandomInt(max)));
    }, 400);
    setTimeout(() => clearInterval(id), 1600);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => rollingDice(diceLength, 6)}
      >
        {diceLength}D6
      </Button>

      <Slider
        className={classes.slider}
        defaultValue={3}
        value={diceLength}
        onChange={(e, v) => setDiceLength(v)}
        step={1}
        marks
        min={1}
        max={10}
        valueLabelDisplay="on"
      />

      <Grid container spacing={2}>
        {nums.map((n, i) => (
          <Grid item key={i}>
            <Die6 num={n} key={i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

export default RollDice;
