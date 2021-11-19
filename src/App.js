import { Fragment, useEffect, useState } from 'react';

import Table from './components/game/Table';
import Login from './components/game/Login';
import Button from './components/ui/Button';
import { StyledGame, StyledScore } from './AppStyles';
import { GlobalStyles } from './GlobalStyles';

import { calculateWinner } from './utils/helpers';
import { checkIsWinPossible } from './utils/helpers';

function App() {
  const [players, setPlayers] = useState();
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isCrossesStep, setIsCrossesStep] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isWinPossible, setIsWinPossible] = useState(true);

  const step = isCrossesStep ? 'cross' : 'circle';
  let result;

  useEffect(() => {
    if (winner) {
      setPlayers((prev) => {
        const updatedPlayers = [{ ...prev[0] }, { ...prev[1] }];
        updatedPlayers[winner[0]].score++;
        return updatedPlayers;
      });
    }
  }, [winner]);

  useEffect(() => {
    setWinner(calculateWinner(cells));
    setIsWinPossible(checkIsWinPossible(cells));
  }, [cells]);

  const clickHandler = (i) => {
    if (winner || cells[i] || !isWinPossible) {
      return;
    }

    setCells((prev) => {
      const cells = prev.slice();
      cells.splice(i, 1, step);
      return cells;
    });
    setIsCrossesStep((prev) => !prev);
  };

  const submitPlayersHandler = (players) => {
    setPlayers([
      { name: players[0], score: 0 },
      { name: players[1], score: 0 },
    ]);
    setIsLoginOpen(false);
  };

  const resetHandler = () => {
    setCells(Array(9).fill(null));
    setIsCrossesStep(true);
    setIsWinPossible(true);
  };

  if ((!cells.includes(null) && !winner) || (!isWinPossible && !winner)) {
    result = 'Draw';
  } else if (winner) result = `Winner: ${players[winner[0]].name}`;

  return (
    <Fragment>
      <GlobalStyles />
      <StyledGame>
        {isLoginOpen && <Login onSubmitHandler={submitPlayersHandler} />}

        <Table
          cells={cells}
          onHandleClick={clickHandler}
          winnerLine={winner?.[1]}
        />

        {players && (
          <StyledScore>
            <div>Score</div>
            <div>{`${players[0].name}: ${players[0].score}`}</div>
            <div>{`${players[1].name}: ${players[1].score}`}</div>
            {result && <div>{result}</div>}
            {result && <Button onClick={resetHandler}>New game</Button>}
          </StyledScore>
        )}
      </StyledGame>
    </Fragment>
  );
}

export default App;
