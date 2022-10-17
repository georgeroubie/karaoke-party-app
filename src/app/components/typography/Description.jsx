import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const Description = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Description.defaultProps = {
  className: null,
};

export default Description;
