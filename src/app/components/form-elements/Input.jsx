import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  outline: 0;
  border-radius: 0;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  width: 100%;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }

  &:disabled {
    filter: blur(2px);
    cursor: none;
    pointer-events: none;
    user-select: none;
  }
`;

const Input = forwardRef(({ className, value, type, disabled, placeholder, onKeyDown, onChange }, ref) => {
  return (
    <StyledInput
      className={className}
      value={value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={ref}
    />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Input.defaultProps = {
  className: null,
  value: '',
  type: 'text',
  disabled: false,
  placeholder: null,
  onChange: () => {},
  onKeyDown: () => {},
};

export default Input;
