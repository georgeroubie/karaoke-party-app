import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  background-color: ${({ theme: { colors } }) => colors.warningBackgroundPrimary};
  padding: ${({ theme: { spacing } }) => spacing.normal};
  color: ${({ theme: { colors } }) => colors.warningTextPrimary};
  margin: 0;
  text-align: center;
  user-select: none;

  a {
    color: ${({ theme: { colors } }) => colors.warningTextPrimary};
  }
`;

const Warning = ({ className, children }) => <Wrapper className={className}>{children}</Wrapper>;

Warning.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Warning;
