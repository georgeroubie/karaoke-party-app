import { useState } from 'react';
import styled from 'styled-components';
import _Button from '../../components/form-elements/Button';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Donation from '../../components/ui/Donation';
import { deleteAllData } from '../../helpers/storage';
import Settings from './Settings';

const Button = styled(_Button)`
  margin-top: ${({ theme: { spacing } }) => spacing.normal};
`;

const Info = () => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <PageWrapper title="Everything you need to know">
      <Description>
        <Donation />
      </Description>

      <Subtitle>About</Subtitle>
      <Description>
        Karaoke Party web application can create a list of players with karaoke songs from YouTube and randomly choose
        who will sing next. You can find the code of this web application on my GitHub page. If you like it give
        the repository a star on&nbsp;
        <Hyperlink href="https://github.com/georgeroubie/karaoke-party-app" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        . Thank you for using it, have fun!
      </Description>

      <Subtitle>Creator</Subtitle>
      <Description>
        My name is George Roubie and you can follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank">
          LinkedIn
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank">
          Medium
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie" target="_blank">
          Codepen
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://github.com/georgeroubie" target="_blank">
          GitHub
        </Hyperlink>
        .
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
