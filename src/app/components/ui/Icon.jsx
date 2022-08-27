import PropTypes from 'prop-types';
import Cancel from '../../svg/Cancel';
import Delete from '../../svg/Delete';
import Info from '../../svg/Info';
import Loader from '../../svg/Loader';
import People from '../../svg/People';
import Search from '../../svg/Search';
import VideoGameController from '../../svg/VideoGameController';

const Icon = ({ type, className }) => {
  switch (type) {
    case 'delete':
      return <Delete className={className} />;
    case 'info':
      return <Info className={className} />;
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
