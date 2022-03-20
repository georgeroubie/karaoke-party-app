import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Warning from '../components/Warning';
import { getItems } from '../helpers/data';
import { setAnimation } from '../theme/styles/helpers';

const Wrapper = styled.div``;

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

const Button = styled.button`
  width: 100px;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  padding: 5px 10px;
  text-align: center;
  display: block;
  margin: 20px auto;
`;

const Icon = styled.span`
  ${({ $spin }) =>
    $spin &&
    css`
      ${setAnimation('spin infinite 500ms linear')}
    `}
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
    <PageWrapper>
      {!players.length ? (
        <Warning>
          There are no players, click <Link to="/add-player">here</Link> to add some.
        </Warning>
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
          {players.length > 1 &&
            (shuffling ? (
              <Button onClick={stopShuffling} disabled={disableShuffling}>
                {disableShuffling ? (
                  <Icon className="material-icons" $spin>
                    loop
                  </Icon>
                ) : (
                  'STOP'
                )}
              </Button>
            ) : (
              <Button onClick={startShuffling}>SHUFFLE</Button>
            ))}
        </Wrapper>
      )}
    </PageWrapper>
  );
};

export default Play;
