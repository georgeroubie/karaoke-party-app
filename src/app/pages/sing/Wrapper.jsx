import PropTypes from 'prop-types';
import PageWrapper from '../../components/layout/PageWrapper';

const Wrapper = ({ children }) => <PageWrapper title="Party time 🎉">{children}</PageWrapper>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
