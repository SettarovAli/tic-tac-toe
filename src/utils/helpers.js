const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = (cells) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      const player = cells[a] === 'cross' ? 0 : 1;
      return [player, i];
    }
  }

  return null;
};

export const checkIsWinPossible = (cells) => {
  const set = new Set();

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const arr = [cells[a], cells[b], cells[c]];

    if (arr.includes('cross') && arr.includes('circle')) {
      set.add(i);
      const difference = [0, 1, 2, 3, 4, 5, 6, 7].filter((x) => !set.has(x));

      if (difference.length === 1) {
        const [d, f, g] = lines[difference[0]];
        const filledCells = [cells[d], cells[f], cells[g]].filter((el) => el);

        if (filledCells.length === 1 || filledCells[0] === 'circle')
          return false;
      } else if (difference.length === 0) return false;
    }
  }

  return true;
};
