import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import _ButtonWrapper from '../components/ButtonWrapper';
import Form from '../components/Form';
import PageWrapper from '../components/PageWrapper';
import { deleteItem, getItems } from '../helpers/data';

const ItemTitle = styled.div`
  width: calc(100% - 150px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
  font-size: 1.2rem;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-right: 0;
  height: 58px;
  line-height: 58px;
`;

const ButtonWrapper = styled(_ButtonWrapper)`
  width: 150px;
  height: 58px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    ${ItemTitle},
    ${ButtonWrapper} {
      border-bottom: 0;
    }
  }
`;

const Players = () => {
  const [editItem, setEditItem] = useState(null);
  const [players, setPlayers] = useState(getItems());

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

  if (!editItem && !players.length) return null;

  return (
    <PageWrapper title="Players List">
      {editItem ? (
        <Form item={editItem} onComplete={saveIsCompleted} />
      ) : (
        players.map(({ id, name }) => (
          <Item key={id}>
            <ItemTitle>{name}</ItemTitle>
            <ButtonWrapper>
              <Button icon="edit" onClick={() => editPlayer(id)} />
              <Button icon="delete" onClick={() => deletePlayer(id)} />
            </ButtonWrapper>
          </Item>
        ))
      )}
    </PageWrapper>
  );
};

export default Players;
