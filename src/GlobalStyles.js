import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --cell-height: 19rem;
  --winner-line: 2rem;
  --table-gap: 1rem;
} 

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 62.5%;

  @media (max-width: 1024px) {
    font-size: 55%;
  }

  @media (max-width: 768px) {
    font-size: 50%;
  }

  @media (max-width: 600px) {
    font-size: 45%;
  }

  @media (max-width: 480px) {
    font-size: 35%;
  }

  @media (max-width: 480px) {
    font-size: 30%;
  }

  @media (max-width: 350px) {
    font-size: 25%;
  }
}

body {
  background-color: #545f7d;
}
`;
