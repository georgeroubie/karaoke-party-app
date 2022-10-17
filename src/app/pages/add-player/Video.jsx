import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const Content = styled.iframe`
  border: 0;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Video = ({ className, video }) => {
  return (
    <Wrapper className={className}>
      <Content title={video.title} src={video.embedUrl} />
    </Wrapper>
  );
};

Video.propTypes = {
  className: PropTypes.string,
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    embedUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

Video.defaultProps = {
  className: null,
};

export default Video;
