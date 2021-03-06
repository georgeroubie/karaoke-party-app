import { useContext, useState } from 'react';
import styled from 'styled-components';
import _Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import { deleteAllData } from '../helpers/storage';
import { AppContext } from '../state/Context';
import { DARK_THEME_KEY } from '../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../theme/themes/light';

const Title = styled.h3`
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const Text = styled.p`
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};

  form {
    display: inline-block;
    margin-left: ${({ theme: { spacing } }) => spacing.normal};
  }
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
    <PageWrapper title="Everything you need to know">
      <Title>Donation</Title>
      <Text>
        Buy me a coffee or a beer:
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="FA7AF4NJTZVEG" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </Text>
      <Title>About</Title>
      <Text>
        Karaoke Party web application can create a list of players with karaoke songs from YouTube and randomly choose
        who will sing next. The application is created by George Roubie (me). You can find the code of this web
        application on my GitHub page. If you like it give the??repository a star on&nbsp;
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
        {!showDelete && <Button type="danger" text="DELETE ALL DATA" onClick={() => setShowDelete(true)} />}
        {showDelete && <Button type="danger" text="ARE YOU SURE?" onClick={deleteAllData} />}
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
