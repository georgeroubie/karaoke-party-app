import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: 0;
  cursor: pointer;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  color: ${({ theme: { colors } }) => colors.textPrimary};

  &:hover,
  &:active {
    background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  }

  &:disabled {
    background-color: rgba(${({ theme: { colors } }) => colors.backgroundSecondary}, 0.5);
  }
`;

const Text = styled.span`
  font-size: 0.9rem;
`;

const Icon = styled.span`
  font-size: 1.3rem;
`;

const Button = ({ className, text, icon, disabled, onClick }) => (
  <StyledButton className={className} disabled={disabled} onClick={onClick}>
    {text && <Text>{text}</Text>}
    {icon && <Icon className="material-icons">{icon}</Icon>}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  text: null,
  icon: null,
  disabled: false,
};

export default Button;
