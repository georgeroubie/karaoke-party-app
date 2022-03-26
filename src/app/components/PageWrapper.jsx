import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Button from './Button';

const Wrapper = styled.main`
  padding-bottom: ${({ theme: { spacing } }) => spacing.xlarge};
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};
  height: 40px;
  line-height: 40px;
`;

const Button = styled(_Button)`
  width: 110px;
`;

const PageWrapper = ({ title, action, actionText, children }) => (
  <Wrapper>
    {title && (
      <Title>
        {title} {actionText && <Button size="small" text={actionText} onClick={action} />}
      </Title>
    )}
    {children}
  </Wrapper>
);

PageWrapper.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
  actionText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageWrapper.defaultProps = {
  title: null,
  action: () => {},
  actionText: null,
};

export default PageWrapper;
