import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.p`
  background-color: ${({ theme: { colors } }) => colors.warningBackgroundPrimary};
  padding: ${({ theme: { spacing } }) => spacing.normal};
  color: ${({ theme: { colors } }) => colors.warningTextPrimary};
  margin: 0;
  text-align: center;
  user-select: none;

  a {
    color: ${({ theme: { colors } }) => colors.warningTextPrimary};
  }
`;

const NoPlayers = () => (
  <Wrapper>
    No players, don't worry <Link to="/add-player">add some</Link>
  </Wrapper>
);

export default NoPlayers;
