import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};

  button {
    flex-grow: 1;
    flex-basis: 0;

    &:not(:last-child) {
      border-right: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
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
