import styled from 'styled-components';

import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';

export const StyledCross = styled(Cross)`
  stroke: #c4c4c4;
  transform: scale(1.6);
`;

export const StyledCircle = styled(Circle)`
  stroke: #c4c4c4;
  transform: scale(1.1);
`;

export const StyledCell = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #44425e;
  border: none;

  :nth-child(1) {
    border-top-left-radius: 1rem;
  }

  :nth-child(3) {
    border-top-right-radius: 1rem;
  }

  :nth-child(7) {
    border-bottom-left-radius: 1rem;
  }

  :nth-child(9) {
    border-bottom-right-radius: 1rem;
  }

  /* TOP */
  :nth-child(2)::before,
  :nth-child(2)::after,
  :nth-child(8)::before,
  :nth-child(8)::after {
    content: '';
    display: block;
    background-color: #a855c1;
    position: absolute;
    border-radius: 1rem;
    width: 1rem;
    height: 2rem;
  }

  :nth-child(2)::before {
    top: 0;
    left: 0;
    transform: translate(-1rem, -1.5rem);
  }

  :nth-child(2)::after {
    top: 0;
    right: 0;
    transform: translate(1rem, -1.5rem);
  }

  /* BOTTOM */
  :nth-child(8)::before {
    bottom: 0;
    left: 0;
    transform: translate(-1rem, 1.5rem);
  }

  :nth-child(8)::after {
    bottom: 0;
    right: 0;
    transform: translate(1rem, 1.5rem);
  }

  /* LEFT */
  :nth-child(4)::before,
  :nth-child(4)::after,
  :nth-child(6)::before,
  :nth-child(6)::after {
    content: '';
    display: block;
    background-color: #a855c1;
    position: absolute;
    border-radius: 1rem;
    width: 2rem;
    height: 1rem;
  }

  :nth-child(4)::before {
    left: 0;
    top: 0;
    transform: translate(-1.5rem, -1rem);
  }

  :nth-child(4)::after {
    left: 0;
    bottom: 0;
    transform: translate(-1.5rem, 1rem);
  }

  /* RIGHT */
  :nth-child(6)::before {
    right: 0;
    top: 0;
    transform: translate(1.5rem, -1rem);
  }

  :nth-child(6)::after {
    right: 0;
    bottom: 0;
    transform: translate(1.5rem, 1rem);
  }
`;
