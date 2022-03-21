import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../state/Context';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import _Input from './Input';

const Input = styled(_Input)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Form = ({ item, onComplete }) => {
  const nameInputRef = useRef(null);
  const { addPlayer, editPlayer } = useContext(AppContext);
  const [name, setName] = useState(item.name);
  const [song, setSong] = useState(item.song);

  const save = () => {
    if (!item.id) {
      addPlayer({ id: Date.now(), name, song });
    } else {
      editPlayer({ id: item.id, name, song });
    }
    onComplete();
  };

  const handleKeyDown = ({ code }) => {
    if (code === 'Enter' && name && song) {
      save();
    }
  };

  useEffect(() => {
    nameInputRef?.current.focus();
  }, []);

  return (
    <>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        ref={nameInputRef}
        onKeyDown={handleKeyDown}
      />
      <Input
        type="text"
        placeholder="Song url (e.g. from YouTube)"
        value={song}
        onChange={({ target }) => setSong(target.value)}
        onKeyDown={handleKeyDown}
      />
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
