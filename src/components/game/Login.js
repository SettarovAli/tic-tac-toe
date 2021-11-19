import { useState } from 'react';

import Modal from '../ui/Modal';
import { StyledForm } from './LoginStyles';

const Login = ({ onSubmitHandler }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const changeNameHandler = (e) => {
    if (e.target.id === 'player1') {
      setPlayer1(e.target.value);
    } else {
      setPlayer2(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmitHandler([player1, player2]);
  };

  return (
    <Modal>
      <StyledForm onSubmit={submitHandler}>
        <label htmlFor="player1">Player 1</label>
        <input
          value={player1}
          onChange={changeNameHandler}
          type="text"
          id="player1"
          placeholder="Player 1"
          required
        />
        <label htmlFor="player2">Player 2</label>
        <input
          value={player2}
          onChange={changeNameHandler}
          type="text"
          id="player2"
          placeholder="Player 2"
          required
        />
        <input type="submit" value="Submit" />
      </StyledForm>
    </Modal>
  );
};

export default Login;
