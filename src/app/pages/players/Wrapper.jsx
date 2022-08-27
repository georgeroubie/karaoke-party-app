import PropTypes from 'prop-types';
import PageWrapper from '../../components/PageWrapper';

const Wrapper = ({ children }) => <PageWrapper title="Karaoke time, let's have fun 🥳">{children}</PageWrapper>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
