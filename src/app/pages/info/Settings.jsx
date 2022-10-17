import { useContext } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const Selection = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const id = 'theme_selection';

  function handleThemeOnChange({ target }) {
    setTheme(target.checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  }

  return (
    <>
      <Subtitle>Settings</Subtitle>
      <Selection>
        <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleThemeOnChange} />
        <Label htmlFor={id}>Dark theme</Label>
      </Selection>
    </>
  );
};

export default Settings;
