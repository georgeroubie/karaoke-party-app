import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../state/Context';
import Button from './Button';
import _ButtonInput from './ButtonInput';
import ButtonWrapper from './ButtonWrapper';
import Input from './Input';
import SearchSong from './SearchSong';

const ButtonInput = styled(_ButtonInput)`
  margin: ${({ theme: { spacing } }) => spacing.normal} auto;

  span {
    font-size: 1.6rem;
  }
`;

const Form = ({ item, onComplete }) => {
  const nameInputRef = useRef(null);
  const { addPlayer, editPlayer } = useContext(AppContext);
  const [name, setName] = useState(item.name);
  const [song, setSong] = useState(item.song);
  const [showYouTubeWizard, setShowYouTubeWizard] = useState(false);

  const save = () => {
    const isEdit = !!item.id;
    const player = { id: isEdit ? item.id : Date.now(), name, song, active: false };
    isEdit ? editPlayer(player) : addPlayer(player);
    onComplete();
  };

  const updateSongUrl = (url = null) => {
    if (url) setSong(url);
    setShowYouTubeWizard(false);
  };

  const handleKeyDown = ({ code }) => {
    if (code === 'Enter' && name && song) {
      save();
    }
  };

  useEffect(() => {
    nameInputRef?.current.focus();
  }, []);

  return showYouTubeWizard ? (
    <SearchSong updateSongUrl={updateSongUrl} />
  ) : (
    <>
      <Input
        type="text"
        placeholder="Player name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        ref={nameInputRef}
        onKeyDown={handleKeyDown}
      />
      <ButtonInput>
        <Input
          type="text"
          placeholder="Song name or use the wizard"
          value={song}
          onChange={({ target }) => setSong(target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button text="🧙" onClick={() => setShowYouTubeWizard(true)} />
      </ButtonInput>
      <ButtonWrapper>
        <Button text="CANCEL" onClick={onComplete} />
        <Button text="SAVE" disabled={!name || !song} onClick={() => save()} />
      </ButtonWrapper>
    </>
  );
};

Form.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    song: PropTypes.string,
  }),
  onComplete: PropTypes.func.isRequired,
};

Form.defaultProps = {
  item: {
    id: null,
    name: '',
    song: '',
  },
};

export default Form;
