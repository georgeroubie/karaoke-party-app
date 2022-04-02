import PropTypes from 'prop-types';
import Cancel from '../svg/Cancel';
import Info from '../svg/Info';
import Loader from '../svg/Loader';
import Search from '../svg/Search';
import Delete from './../svg/Delete';
import Mic from './../svg/Mic';
import People from './../svg/People';
import VideoGameController from './../svg/VideoGameController';

const Icon = ({ type, className }) => {
  switch (type) {
    case 'delete':
      return <Delete className={className} />;
    case 'info':
      return <Info className={className} />;
    case 'mic':
      return <Mic className={className} />;
    case 'people':
      return <People className={className} />;
    case 'video_game_controller':
      return <VideoGameController className={className} />;
    case 'loader':
      return <Loader className={className} />;
    case 'search':
      return <Search className={className} />;
    case 'cancel':
      return <Cancel className={className} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
