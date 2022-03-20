import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  max-width: 500px;
  margin: 0 auto ${({ theme: { spacing } }) => spacing.large};
`;

const Title = styled.h2`
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const PageWrapper = ({ title, children }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
);

PageWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageWrapper.defaultProps = {
  title: null,
};

export default PageWrapper;
