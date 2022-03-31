import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};

  input {
    border: 0;
  }

  button {
    border-left: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  }
`;

const ButtonInput = ({ className, children }) => <Wrapper className={className}>{children}</Wrapper>;

ButtonInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonInput.defaultProps = {
  className: null,
  onKeyDown: () => {},
};

export default ButtonInput;
