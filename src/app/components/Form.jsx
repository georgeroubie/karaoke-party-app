import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { saveItem } from '../helpers/data';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import _Input from './Input';

const Input = styled(_Input)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Form = ({ item, showAddAnother, onComplete }) => {
  const nameInputRef = useRef(null);
  const [name, setName] = useState(item.name);
  const [song, setSong] = useState(item.song);

  const save = (successCallback) => {
    saveItem(item.id, name, song);
    successCallback();
  };

  const resetForm = () => {
    setName('');
    setSong('');
    nameInputRef?.current.focus();
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
      />
      <Input
        type="text"
        placeholder="Song url (e.g. from YouTube)"
        value={song}
        onChange={({ target }) => setSong(target.value)}
      />
      <ButtonWrapper>
        <Button text="CANCEL" onClick={onComplete} />
        <Button text="SAVE" disabled={!name || !song} onClick={() => save(onComplete)} />
        {showAddAnother && (
          <Button text="SAVE &amp; ADD NEW" disabled={!name || !song} onClick={() => save(resetForm)} />
        )}
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
  showAddAnother: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
};

Form.defaultProps = {
  item: {
    id: -1,
    name: '',
    song: '',
  },
  showAddAnother: false,
};

export default Form;
