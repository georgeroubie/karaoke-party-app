import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Form from '../components/Form';
import NoPlayers from '../components/NoPlayers';
import PageWrapper from '../components/PageWrapper';
import { AppContext } from '../state/Context';

const PlayersList = styled.table`
  width: 100%;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-collapse: collapse;
  table-layout: fixed;
`;

const PlayerNameCell = styled.td`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
  const [editItem, setEditItem] = useState(null);
  const navigate = useNavigate();

  const editPlayer = (id) => {
    setEditItem(state.playersList.find((player) => player.id === id));
  };

  const saveIsCompleted = () => {
    setEditItem(null);
  };

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
      {editItem ? (
        <Form item={editItem} onComplete={saveIsCompleted} />
      ) : (
        <PlayersList>
          <tbody>
            {state.playersList.map(({ id, name }) => (
              <PlayerListItem key={id}>
                <PlayerNameCell>{name}</PlayerNameCell>
                <ActionCell>
                  <Button icon="edit" onClick={() => editPlayer(id)} />
                </ActionCell>
                <ActionCell>
                  <Button icon="delete" type="danger" onClick={() => deletePlayer(id)} />
                </ActionCell>
              </PlayerListItem>
            ))}
          </tbody>
        </PlayersList>
      )}
    </Wrapper>
  );
};

export default Players;
