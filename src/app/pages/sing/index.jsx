import { useContext } from 'react';
import NoPlayers from '../../components/messages/NoPlayers';
import { AppContext } from '../../state/Context';
import Game from './Game';
import Wrapper from './Wrapper';

const Sing = () => {
  const { state } = useContext(AppContext);

  if (!state.playersList.length) {
    return (
      <Wrapper>
        <NoPlayers />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Game />
    </Wrapper>
  );
};

export default Sing;
