import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import NoPlayers from '../components/NoPlayers';
import PageWrapper from '../components/PageWrapper';
import { AppContext } from '../state/Context';
import { textTruncate } from '../theme/styles/helpers';

const PlayersList = styled.table`
  width: 100%;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-collapse: collapse;
  table-layout: fixed;
`;

const PlayerNameCell = styled.td`
  ${textTruncate}
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const ActionCell = styled.td`
  width: 55px;
`;

const PlayerListItem = styled.tr`
  ${PlayerNameCell},
  ${ActionCell} {
    border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  }
`;

const Players = () => {
  const { state, deletePlayer } = useContext(AppContext);
  const navigate = useNavigate();

  const Wrapper = ({ children }) => (
    <PageWrapper title="Players List" actionText="ADD" action={() => navigate('/add-player')}>
      {children}
    </PageWrapper>
  );

  if (!state.playersList.length) {
    return (
      <Wrapper>
        <NoPlayers />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PlayersList>
        <tbody>
          {state.playersList.map(({ id, name }) => (
            <PlayerListItem key={id}>
              <PlayerNameCell>{name}</PlayerNameCell>
              <ActionCell>
                <Button icon="delete" type="danger" onClick={() => deletePlayer(id)} />
              </ActionCell>
            </PlayerListItem>
          ))}
        </tbody>
      </PlayersList>
    </Wrapper>
  );
};

export default Players;
