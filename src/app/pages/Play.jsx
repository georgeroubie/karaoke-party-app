import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItems } from '../helpers/data';

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Bubble = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.a`
  padding: 10px;
  font-weight: 500;
  color: #000;
  width: 50%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.animate {
    animation: winner linear 0.3s infinite;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100px;
  border: 2px solid #000;
  padding: 5px 10px;
  text-align: center;
  display: block;
  margin: 20px auto;
`;

const Warning = styled.p`
  border: 1px solid #000;
  background-color: #dcdcdc;
  margin: 20px auto;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  user-select: none;
`;

const Play = () => {
  const [players, setPlayers] = useState(getItems());
  const [shuffling, setShuffling] = useState(false);
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
    setShuffling(false);
    setAnimateItem(true);
  };

  useEffect(() => {
    if (shuffling) shufflePlayers();
  }, [shuffling, shufflePlayers]);

  return players.length < 2 ? (
    <Warning>No players, go to PLAYERS page</Warning>
  ) : (
    <Wrapper>
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
      {shuffling ? <Button onClick={stopShuffling}>STOP</Button> : <Button onClick={startShuffling}>SHUFFLE</Button>}
    </Wrapper>
  );
};

export default Play;
