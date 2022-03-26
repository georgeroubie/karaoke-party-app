import { useContext } from 'react';
import NoPlayers from '../../components/NoPlayers';
import PageWrapper from '../../components/PageWrapper';
import { AppContext } from '../../state/Context';
import List from './List';

const Play = () => {
  const { state } = useContext(AppContext);

  const Wrapper = ({ children }) => <PageWrapper title="Karaoke time, let's play 🥳">{children}</PageWrapper>;

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
