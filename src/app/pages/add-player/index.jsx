import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/form-elements/Button';
import ButtonWrapper from '../../components/form-elements/ButtonWrapper';
import Input from '../../components/form-elements/Input';
import PageWrapper from '../../components/layout/PageWrapper';
import { AppContext } from '../../state/Context';
import SearchSong from './SearchSong';

const AddPlayer = () => {
  const nameInputRef = useRef(null);
  const navigate = useNavigate();
  const { addPlayer } = useContext(AppContext);
  const [name, setName] = useState('');
  const [songUrl, setSongUrl] = useState(null);

  useEffect(() => {
    nameInputRef?.current.focus();
  }, []);

  function goToHome() {
    navigate('/');
  }

  function save(url) {
    addPlayer({ id: Date.now(), name, song: url ? url : songUrl, active: false });
    goToHome();
  }

  function handleKeyDown({ code }) {
    if (code === 'Enter' && name && songUrl) {
      save();
    }
  }

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
        <Button text="CANCEL" onClick={goToHome} />
        <Button text="SAVE" disabled={!name || !songUrl} onClick={() => save()} />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default AddPlayer;
