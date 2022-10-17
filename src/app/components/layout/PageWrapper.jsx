import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Button from '../form-elements/Button';
import _Title from '../typography/Title';

const Wrapper = styled.main`
  padding-bottom: ${({ theme: { spacing } }) => spacing.xlarge};
`;

const Title = styled(_Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(_Button)`
  width: 110px;
`;

const PageWrapper = ({ title, action, actionText, children }) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          {title} {actionText && <Button size="small" text={actionText} onClick={action} />}
        </Title>
      )}
      {children}
    </Wrapper>
  );
};

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
