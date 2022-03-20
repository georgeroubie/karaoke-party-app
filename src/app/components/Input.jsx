import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  outline: 0;
  border-radius: 0;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  width: 100%;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }
`;

const Input = forwardRef(({ className, value, type, placeholder, onChange }, ref) => (
  <StyledInput
    className={className}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    ref={ref}
  />
));

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: null,
  value: '',
  type: 'text',
  placeholder: null,
  onChange: () => {},
};

export default Input;
