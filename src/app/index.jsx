import React from 'react';
import styled from 'styled-components';
import Menu from './routing/Menu';
import Routing from './routing/Routing';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  user-select: none;
  margin: 30px auto 60px;
`;

const App = () => (
  <Wrapper>
    <Title onClick={() => window.location.reload()}>Karaoke Party</Title>
    <Menu />
    <Routing />
  </Wrapper>
);

export default App;
