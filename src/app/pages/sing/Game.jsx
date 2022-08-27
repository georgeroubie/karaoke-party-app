import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import ButtonWrapper from '../../components/ButtonWrapper';
import { randomNumber } from '../../helpers/generators';
import { AppContext } from '../../state/Context';
import ActivePlayer from './ActivePlayer';

const Title = styled.h3`
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const Game = () => {
  const navigate = useNavigate();
  const { state, deletePlayer, makePlayerActive } = useContext(AppContext);
  const [shuffle, setShuffle] = useState(state.playersList.length > 1);
  const [showNext, setShowNext] = useState(false);

  const goToHome = () => navigate('/');

  useEffect(() => {
    let timeout;
    if (shuffle) {
      timeout = setTimeout(() => setShuffle(false), randomNumber(3, 6) * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [shuffle]);

  useEffect(() => {
    let interval;
    if (shuffle) {
      interval = setInterval(() => {
        const randomIndex = randomNumber(0, state.playersList.length - 1);
        const randomPlayer = state.playersList[randomIndex];
        makePlayerActive(randomPlayer.id);
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [shuffle, makePlayerActive, state.playersList]);

  const getActivePlayer = () => state.playersList.find((player) => player.active);

  const getInActivePlayer = () => state.playersList.find((player) => !player.active);

  const openSong = () => {
    window.open(getActivePlayer().song, '_blank');
    setShowNext(true);
  };

  const handleNext = () => {
    setShowNext(false);
    if (state.playersList.length === 2) {
      makePlayerActive(getInActivePlayer().id);
      deletePlayer(getActivePlayer().id);
    } else if (state.playersList.length === 1) {
      deletePlayer(getActivePlayer().id);
      goToHome();
    } else {
      deletePlayer(getActivePlayer().id);
      setShuffle(true);
    }
  };

  return (
    <>
      {showNext && (
        <Title>
          Amazing performance <ActivePlayer />!
        </Title>
      )}
      {!showNext && (
        <Title>
          Time to sing <ActivePlayer animate={!shuffle} />
        </Title>
      )}
      <ButtonWrapper>
        <Button text="CANCEL" size="small" onClick={goToHome} disabled={shuffle} />
        {showNext ? (
          <Button
            text={state.playersList.length === 1 ? 'FINISH' : 'NEXT PLAYER'}
            size="small"
            onClick={handleNext}
            disabled={shuffle}
          />
        ) : (
          <Button
            size="small"
            onClick={openSong}
            disabled={shuffle}
            text={shuffle ? null : 'SING'}
            icon={shuffle ? 'loader' : null}
            iconSpin={shuffle}
          />
        )}
      </ButtonWrapper>
    </>
  );
};

export default Game;
