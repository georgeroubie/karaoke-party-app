import PropTypes from 'prop-types';
import React from 'react';
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

const Warning = ({ children }) => <Wrapper>{children}</Wrapper>;

Warning.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Warning;
