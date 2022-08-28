import { useState } from 'react';
import styled from 'styled-components';
import _Button from '../../components/form-elements/Button';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Subtitle from '../../components/typography/Subtitle';
import { deleteAllData } from '../../helpers/storage';
import Paypal from './Paypal';
import Settings from './Settings';

const Button = styled(_Button)`
  margin-top: ${({ theme: { spacing } }) => spacing.normal};
`;

const Hyperlink = styled.a`
  margin: 0 ${({ theme: { spacing } }) => spacing.small};
`;

const Info = () => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <PageWrapper title="Everything you need to know">
      <Subtitle>Donation</Subtitle>
      <Description>
        Buy me a coffee or a beer: <Paypal />
      </Description>
      <Subtitle>About</Subtitle>
      <Description>
        Karaoke Party web application can create a list of players with karaoke songs from YouTube and randomly choose
        who will sing next. The application is created by George Roubie (me). You can find the code of this web
        application on my GitHub page. If you like it give the repository a star on
        <Hyperlink href="https://github.com/georgeroubie/karaoke-party-app" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        and follow me on
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
          LinkedIn
        </Hyperlink>
        and
        <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
          Medium
        </Hyperlink>
        . Thank you for using it, have fun!
      </Description>

      <Subtitle>Data</Subtitle>
      <Description>
        Karaoke Party web application does not use any kind of cookies or tracking. All the data are saved on your
        device. In case you clear the browser cache all the players will be deleted. You can also delete manually all
        the data.
        <br />
        {!showDelete && <Button type="danger" text="DELETE ALL DATA" onClick={() => setShowDelete(true)} />}
        {showDelete && <Button type="danger" text="ARE YOU SURE?" onClick={deleteAllData} />}
      </Description>

      <Settings />
    </PageWrapper>
  );
};

export default Info;
