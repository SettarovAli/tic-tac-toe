import styled, { css } from 'styled-components';

export const StyledTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 60rem;
  height: 60rem;
  gap: var(--table-gap);
  background-color: #a855c1;
  border-radius: 1rem;

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const line1 = css`
  transform: translate(
    2.5rem,
    calc(var(--cell-height) / 2 - var(--winner-line) / 2)
  );
`;

const line2 = css`
  transform: translate(
    2.5rem,
    calc(
      var(--cell-height) * 2 + var(--table-gap) - var(--cell-height) / 2 -
        var(--winner-line) / 2
    )
  );
`;

const line3 = css`
  transform: translate(
    2.5rem,
    calc(
      var(--cell-height) * 3 + var(--table-gap) * 2 - var(--cell-height) / 2 -
        var(--winner-line) / 2
    )
  );
`;

const line4 = css`
  transform-origin: top left;
  transform: rotate(90deg)
    translate(
      2.5rem,
      calc((var(--cell-height) / 2 + var(--winner-line) / 2) * -1)
    );
`;

const line5 = css`
  transform-origin: top left;
  transform: rotate(90deg)
    translate(
      2.5rem,
      calc(
        (
            var(--cell-height) * 2 + var(--table-gap) - var(--cell-height) / 2 +
              var(--winner-line) / 2
          ) * -1
      )
    );
`;

const line6 = css`
  transform-origin: top left;
  transform: rotate(90deg)
    translate(
      2.5rem,
      calc(
        (
            var(--cell-height) * 3 + var(--table-gap) * 2 - var(--cell-height) /
              2 + var(--winner-line) / 2
          ) * -1
      )
    );
`;

const line7 = css`
  transform-origin: top left;
  transform: rotate(45deg) translate(2.5rem, calc(var(--winner-line) / 2 * -1));
  width: 80rem;
`;

const line8 = css`
  transform-origin: top right;
  transform: rotate(-45deg) translate(-16.5rem, -15rem);
  width: 80rem;
`;

export const StyledWinnerLine = styled.div`
  position: absolute;
  width: 55rem;
  height: var(--winner-line);
  background-color: #af3d38;
  border-radius: 10rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;

  ${(props) =>
    props.winnerLine === 0
      ? line1
      : props.winnerLine === 1
      ? line2
      : props.winnerLine === 2
      ? line3
      : props.winnerLine === 3
      ? line4
      : props.winnerLine === 4
      ? line5
      : props.winnerLine === 5
      ? line6
      : props.winnerLine === 6
      ? line7
      : props.winnerLine === 7
      ? line8
      : ''};
  ${(props) =>
    (props.winnerLine === 0 || props.winnerLine) && 'z-index: 10; opacity: 1;'}
`;
