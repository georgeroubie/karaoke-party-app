import { useContext } from 'react';
import NoPlayers from '../../components/messages/NoPlayers';
import { AppContext } from '../../state/Context';
import List from './List';
import Wrapper from './Wrapper';

const Play = () => {
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
      <List />
    </Wrapper>
  );
};

export default Play;
