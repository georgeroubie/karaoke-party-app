import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/form-elements/Button';
import ButtonWrapper from '../../components/form-elements/ButtonWrapper';
import Subtitle from '../../components/typography/Subtitle';
import { randomNumber } from '../../helpers/generators';
import { AppContext } from '../../state/Context';
import ActivePlayer from './ActivePlayer';
import NextPlayer from './NextPlayer';

const Game = () => {
  const navigate = useNavigate();
  const { state, deletePlayer, makePlayerActive } = useContext(AppContext);
  const [shuffle, setShuffle] = useState(state.playersList.length > 1);
  const [showNext, setShowNext] = useState(false);

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

  function goToHome() {
    navigate('/');
  }

  function getActivePlayer() {
    return state.playersList.find((player) => player.active);
  }

  function getInActivePlayer() {
    return state.playersList.find((player) => !player.active);
  }

  function openSong() {
    window.open(getActivePlayer().song, '_blank');
    setShowNext(true);
  }

  function handleNext() {
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
  }

  return (
    <>
      {showNext && <NextPlayer />}
      {!showNext && (
        <Subtitle>
          Time to sing <ActivePlayer animate={!shuffle} />
        </Subtitle>
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
