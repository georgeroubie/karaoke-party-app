import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};

  input {
    border: 0;
  }

  button {
    border-left: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  }
`;

const ButtonInput = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

ButtonInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonInput.defaultProps = {
  className: null,
};

export default ButtonInput;
