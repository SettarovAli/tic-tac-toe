import React from 'react';

import { StyledCell, StyledCross, StyledCircle } from './CellStyles';

const Cell = ({ value, onHandleClick }) => {
  let result;

  if (value === 'cross') {
    result = <StyledCross />;
  } else if (value === 'circle') {
    result = <StyledCircle />;
  } else {
    result = null;
  }

  return <StyledCell onClick={onHandleClick}>{result}</StyledCell>;
};

export default Cell;
