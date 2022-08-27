import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  line-height: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.extraBold};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const Subtitle = ({ className, children }) => <Wrapper className={className}>{children}</Wrapper>;

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Subtitle.defaultProps = {
  className: null,
};

export default Subtitle;
