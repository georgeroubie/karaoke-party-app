import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Button from '../components/Button';
import Form from '../components/Form';
import PageWrapper from '../components/PageWrapper';
import { deleteItem, getItems } from '../helpers/data';

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

const Button = styled(_Button)`
  border: 0;
`;

const Players = () => {
  const [editItem, setEditItem] = useState(null);
  const [players, setPlayers] = useState(getItems());
  const navigate = useNavigate();

  const editPlayer = (id) => {
    const item = players.find((player) => player.id === id);
    setEditItem(item);
  };

  const deletePlayer = (id) => {
    deleteItem(id);
    setPlayers(getItems());
  };

  const saveIsCompleted = () => {
    setPlayers(getItems());
    setEditItem(null);
  };

  return (
    <PageWrapper title="Players List" actionText="ADD NEW" action={() => navigate('/add-player')}>
      {editItem ? (
        <Form item={editItem} onComplete={saveIsCompleted} />
      ) : (
        <PlayersList>
          <tbody>
            {players.map(({ id, name }) => (
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
    </PageWrapper>
  );
};

export default Players;
