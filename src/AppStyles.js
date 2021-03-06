import styled from 'styled-components';

export const StyledGame = styled.div`
  display: flex;
  width: 1000px;
  padding: 25px;
  justify-content: center;
  margin: 50px auto;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
  }
`;

export const StyledScore = styled.div`
  margin-left: 50px;
  flex: 1;
  color: White;
  font-size: 4rem;

  @media (max-width: 1024px) {
    margin-left: 25px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
