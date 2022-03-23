import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  outline: 0;
  cursor: pointer;
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
  height: 50px;
  line-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.buttonBackgroundPrimary};
  color: ${({ theme: { colors } }) => colors.buttonTextPrimary};

  &:hover,
  &:active {
    background-color: ${({ theme: { colors } }) => colors.buttonBackgroundSecondary};
  }

  ${({ $size }) =>
    $size === 'small' &&
    css`
      height: 40px;
      line-height: 40px;
      padding: 0 ${({ theme: { spacing } }) => spacing.small};
    `}

  ${({ $type }) =>
    $type === 'danger' &&
    css`
      color: ${({ theme: { colors } }) => colors.dangerTextPrimary};
      background-color: ${({ theme: { colors } }) => colors.dangerBackgroundPrimary};

      &:hover,
      &:active {
        background-color: ${({ theme: { colors } }) => colors.dangerBackgroundSecondary};
      }
    `}

  &:disabled {
    filter: blur(2px);
    cursor: none;
    pointer-events: none;
  }
`;

const Text = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const Icon = styled.span`
  font-size: 1.3rem;
`;

const Button = ({ className, size, type, text, icon, disabled, onClick }) => (
  <StyledButton className={className} $size={size} $type={type} disabled={disabled} onClick={onClick}>
    {text && <Text>{text}</Text>}
    {icon && <Icon className="material-icons">{icon}</Icon>}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  size: null,
  type: null,
  text: null,
  icon: null,
  disabled: false,
};

export default Button;
