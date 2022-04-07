import { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import _Button from '../../components/Button';
import { randomNumber } from '../../helpers/generators';
import { AppContext } from '../../state/Context';
import { setAnimation, textTruncate } from '../../theme/styles/helpers';

const ListItems = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme: { spacing } }) => spacing.small};

  @media (min-width: ${({ theme: { screens } }) => screens.medium}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ $animate }) =>
    $animate &&
    css`
      ${setAnimation('winner infinite 1s linear')}

      @media (prefers-reduced-motion: reduce) {
        background-color: ${({ theme: { colors } }) => colors.successBackgroundPrimary};
      }
    `};

  ${Button} {
    width: 40px;
    margin: 0;
  }
`;

const Link = styled.a`
  ${textTruncate}
  font-weight: 500;
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
      const clonedPlayers = players.map((player) => ({ ...player, active: false }));
      const randomIndex = randomNumber(0, players.length - 1);
      clonedPlayers[randomIndex].active = true;
      setPlayers(clonedPlayers);
    }, 50);
    stopShufflingTimeout.current = setTimeout(() => {
      setShuffle(false);
      clearInterval(animateInterval?.current);
    }, Math.floor(randomNumber(3, 6) * 1000));
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
              <Button size="small" icon="mic" onClick={() => window.open(song, '_blank')} />
              <Button size="small" type="danger" icon="delete" onClick={() => deletePlayer(id)} />
            </Actions>
          </Item>
        ))}
      </ListItems>
      {players.length > 1 && (
        <Button
          text={shuffle ? null : 'PLAY'}
          icon={shuffle ? 'loader' : null}
          disabled={shuffle}
          iconSpin={shuffle}
          onClick={startShuffling}
          size="small"
        />
      )}
    </>
  );
};

export default List;
