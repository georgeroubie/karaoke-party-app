import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import _Button from '../../components/Button';
import { AppContext } from '../../state/Context';
import { setAnimation } from '../../theme/styles/helpers';

const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Actions = styled.div`
  display: flex;
  width: 80px;
  flex-shrink: 0;
`;

const Button = styled(_Button)`
  margin: ${({ theme: { spacing } }) => spacing.large} auto 0;
  width: 150px;
  display: flex;

  ${({ $spin }) =>
    $spin &&
    css`
      span {
        ${setAnimation('spin infinite 600ms linear')}
      }
    `};
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing.small};

  ${({ $animate }) =>
    $animate &&
    css`
      ${setAnimation('winner 0.3s linear 10')}
    `};

  @media (min-width: 600px) {
    width: 50%;
  }

  ${Button} {
    width: 40px;
    margin: 0;
  }
`;

const Link = styled.a`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${({ theme: { colors } }) => colors.borderSecondary};
  border-right: 0;
  padding: 0 ${({ theme: { spacing } }) => spacing.small};
  text-decoration: none;
`;

const List = () => {
  const { state, deletePlayer } = useContext(AppContext);
  const animateInterval = useRef(null);
  const stopShufflingTimeout = useRef(null);
  const [players, setPlayers] = useState(state.playersList);
  const [shuffle, setShuffle] = useState(false);
  const [disabledAction, setDisabledAction] = useState(false);

  useEffect(() => {
    setPlayers(state.playersList);
  }, [state.playersList]);

  useEffect(
    () => () => {
      clearInterval(animateInterval?.current);
      clearTimeout(stopShufflingTimeout?.current);
    },
    [],
  );

  const startShuffling = () => {
    setShuffle(true);
    animateInterval.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * players.length);
      const findPrevActiveIndex = players.findIndex((player) => player.active);
      if (randomIndex === findPrevActiveIndex) return;

      const clonedPlayers = players.map((player) => ({ ...player }));
      clonedPlayers[randomIndex].active = true;
      if (findPrevActiveIndex !== -1) {
        clonedPlayers[findPrevActiveIndex].active = false;
      }
      setPlayers(clonedPlayers);
    }, 50);
  };

  const stopShuffling = () => {
    setDisabledAction(true);
    stopShufflingTimeout.current = setTimeout(() => {
      setShuffle(false);
      setDisabledAction(false);
      clearInterval(animateInterval?.current);
    }, 3000);
  };

  return (
    <>
      <ListItems>
        {players.map(({ id, name, song, active }) => (
          <Item key={id} $animate={active}>
            <Link href={song} target="_blank" rel="noreferrer">
              {name}
            </Link>
            <Actions>
              <Button size="small" icon="mic_external_on" onClick={() => window.open(song, '_blank')} />
              <Button size="small" type="danger" icon="delete" onClick={() => deletePlayer(id)} />
            </Actions>
          </Item>
        ))}
      </ListItems>
      {shuffle ? (
        <Button
          text={disabledAction ? null : 'STOP'}
          icon={disabledAction ? 'loop' : null}
          onClick={stopShuffling}
          disabled={disabledAction}
          $spin={disabledAction}
          size="small"
        />
      ) : (
        <Button text="SHUFFLE" onClick={startShuffling} size="small" />
      )}
    </>
  );
};

export default List;