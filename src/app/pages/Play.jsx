import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import _Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import Warning from '../components/Warning';
import { getItems } from '../helpers/data';
import { setAnimation } from '../theme/styles/helpers';

const Bubble = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.a`
  padding: ${({ theme: { spacing } }) => spacing.normal};
  font-weight: 500;
  width: 50%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.animate {
    ${setAnimation('winner linear 0.3s infinite')}
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled(_Button)`
  margin: ${({ theme: { spacing } }) => spacing.normal} auto;
  width: 150px;
  display: flex;

  ${({ $spin }) =>
    $spin &&
    css`
      span {
        ${setAnimation('spin infinite 500ms linear')}
      }
    `};
`;

const Play = () => {
  const [players, setPlayers] = useState(getItems());
  const [shuffling, setShuffling] = useState(false);
  const [disableShuffling, setDisableShuffling] = useState(false);
  const [animateItem, setAnimateItem] = useState(false);

  const shufflePlayers = useCallback(() => {
    setTimeout(() => {
      setPlayers(
        players
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value),
      );
    }, 100);
  }, [players]);

  useEffect(() => {
    if (animateItem) {
      setTimeout(() => setAnimateItem(false), 3000);
    }
  }, [animateItem]);

  const startShuffling = () => {
    setShuffling(true);
  };

  const stopShuffling = () => {
    setDisableShuffling(true);
    setTimeout(() => {
      setShuffling(false);
      setAnimateItem(true);
      setDisableShuffling(false);
    }, 1500);
  };

  useEffect(() => {
    if (shuffling) shufflePlayers();
  }, [shuffling, shufflePlayers]);

  return (
    <PageWrapper title="Karaoke time, let's play 🥳">
      {!players.length ? (
        <Warning>
          No players, don't worry <Link to="/add-player">add some</Link>
        </Warning>
      ) : (
        <>
          <Bubble>
            {players.map(({ id, name, song }, index) => (
              <Item
                key={id}
                href={song}
                target="_blank"
                rel="noreferrer"
                className={animateItem && index === 0 ? 'animate' : null}
              >
                {name}
              </Item>
            ))}
          </Bubble>
          {players.length > 1 &&
            (shuffling ? (
              <Button
                text={disableShuffling ? null : 'STOP'}
                icon={disableShuffling ? 'loop' : null}
                onClick={stopShuffling}
                disabled={disableShuffling}
                $spin={disableShuffling}
                size="small"
              />
            ) : (
              <Button text="SHUFFLE" onClick={startShuffling} size="small" />
            ))}
        </>
      )}
    </PageWrapper>
  );
};

export default Play;
