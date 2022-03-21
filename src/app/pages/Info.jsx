import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import _Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import { deleteData } from '../helpers/data';
import { AppContext } from '../state/Context';
import { DARK_THEME_KEY } from '../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../theme/themes/light';

const Title = styled.h2`
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
  height: 40px;
  line-height: 40px;
`;

const Text = styled.p`
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};
`;

const Button = styled(_Button)`
  margin-top: ${({ theme: { spacing } }) => spacing.normal};
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Info = () => {
  const { state, setTheme } = useContext(AppContext);
  const [showDelete, setShowDelete] = useState(false);
  const { theme } = state;
  const id = 'theme_selection';

  const handleThemeOnChange = ({ target }) => {
    setTheme(target.checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  };

  return (
    <PageWrapper>
      <Title>About</Title>
      <Text>
        Karaoke Party web application can create a list of players with their songs and randomly choose who will sing
        next. The application is created by George Roubie (me). You can find the code of this web application on my
        GitHub page. If you like it give the repository a star on&nbsp;
        <a href="https://github.com/georgeroubie/karaoke-party-app" target="blank">
          GitHub
        </a>
        &nbsp;and follow me on&nbsp;
        <a href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        &nbsp;and&nbsp;
        <a href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
          Medium
        </a>
        . Thank you for using it, have fun!
      </Text>

      <Title>Data</Title>
      <Text>
        Karaoke Party web application does not use any kind of cookies or tracking. All the data are saved on your
        device. In case you clear the browser cache all the players will be deleted. You can also delete manually all
        the data.
        <br />
        {!showDelete && <Button type="danger" text="DELETE DATA" onClick={() => setShowDelete(true)} />}
        {showDelete && <Button type="danger" text="ARE YOU SURE?" onClick={deleteData} />}
      </Text>

      <Title>Settings</Title>
      <Selection>
        <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleThemeOnChange} />
        <Label htmlFor={id}>Dark theme</Label>
      </Selection>
    </PageWrapper>
  );
};

export default Info;
