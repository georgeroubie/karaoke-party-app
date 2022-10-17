import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  background-color: ${({ theme: { colors } }) => colors.warningBackgroundPrimary};
  padding: ${({ theme: { spacing } }) => spacing.normal};
  color: ${({ theme: { colors } }) => colors.warningTextPrimary};
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
  text-align: center;
  user-select: none;
`;

const Warning = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

Warning.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Warning;
