import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};

  button {
    flex-grow: 1;
    flex-basis: 0;
    border: 0;

    &:not(:last-child) {
      border-right: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
    }
  }
`;

const ButtonWrapper = ({ className, children }) => <Wrapper className={className}>{children}</Wrapper>;

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonWrapper.defaultProps = {
  className: null,
};

export default ButtonWrapper;
