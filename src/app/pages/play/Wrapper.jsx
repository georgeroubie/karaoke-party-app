import PropTypes from 'prop-types';
import PageWrapper from '../../components/layout/PageWrapper';

const Wrapper = ({ children }) => {
  return <PageWrapper title="Karaoke time, let's have fun 🥳">{children}</PageWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
