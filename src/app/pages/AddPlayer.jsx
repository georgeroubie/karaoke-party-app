import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ButtonWrapper from '../components/ButtonWrapper';
import Input from '../components/Input';
import PageWrapper from '../components/PageWrapper';
import SearchSong from '../components/SearchSong';
import { AppContext } from '../state/Context';

const AddPlayer = () => {
  const nameInputRef = useRef(null);
  const navigate = useNavigate();
  const { addPlayer } = useContext(AppContext);
  const [name, setName] = useState('');
  const [songUrl, setSongUrl] = useState(null);

  const goToPlayersList = () => navigate('/players');

  const save = (url) => {
    addPlayer({ id: Date.now(), name, song: url ? url : songUrl, active: false });
    goToPlayersList();
  };

  const handleKeyDown = ({ code }) => {
    if (code === 'Enter' && name && songUrl) {
      save();
    }
  };

  useEffect(() => {
    nameInputRef?.current.focus();
  }, []);

  return (
    <PageWrapper title="Add a new player">
      <Input
        type="text"
        placeholder="Player name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        ref={nameInputRef}
        onKeyDown={handleKeyDown}
      />
      <SearchSong disabled={!name} save={save} setSongUrl={setSongUrl} />
      <ButtonWrapper>
        <Button text="CANCEL" onClick={goToPlayersList} />
        <Button text="SAVE" disabled={!name || !songUrl} onClick={() => save()} />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default AddPlayer;
