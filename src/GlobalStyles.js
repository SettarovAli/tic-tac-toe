import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --cell-height: 193.34px;
  --winner-line: 20px;
  --table-gap: 10px;
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
}

body {
  background-color: #545f7d;
}
`;
