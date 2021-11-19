import Cell from './Cell';

import { StyledTable, StyledWinnerLine } from './TableStyles';

const Table = ({ cells, onHandleClick, winnerLine }) => {
  return (
    <StyledTable>
      {cells.map((cell, i) => (
        <Cell key={i} value={cell} onHandleClick={() => onHandleClick(i)} />
      ))}
      <StyledWinnerLine winnerLine={winnerLine} />
    </StyledTable>
  );
};

export default Table;
