import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  outline: 0;
  cursor: pointer;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  color: ${({ theme: { colors } }) => colors.textPrimary};

  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: ${({ theme: { spacing } }) => spacing.small};
    `}

  &:hover,
  &:active {
    background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  }

  &:disabled {
    filter: blur(2px);
    cursor: none;
    pointer-events: none;
  }
`;

const Text = styled.span`
  font-size: 0.9rem;
`;

const Icon = styled.span`
  font-size: 1.3rem;
`;

const Button = ({ className, size, text, icon, disabled, onClick }) => (
  <StyledButton className={className} $size={size} disabled={disabled} onClick={onClick}>
    {text && <Text>{text}</Text>}
    {icon && <Icon className="material-icons">{icon}</Icon>}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  size: 'normal',
  text: null,
  icon: null,
  disabled: false,
};

export default Button;
