import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  die: {
    fontSize: '10em',
    lineHeight: '0.8em'
  },
});

export default function RollDiceDie6({ num }) {
  const classes = useStyles();
  return <span className={classes.die}>{getDieText(num)}</span>;
}

function getDieText(num) {
  switch (num) {
    case 1:
      return '⚀';
    case 2:
      return '⚁';
    case 3:
      return '⚂';
    case 4:
      return '⚃';
    case 5:
      return '⚄';
    case 6:
      return '⚅';
    default:
      return '';
  }
}
