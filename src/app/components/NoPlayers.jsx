import { Link } from 'react-router-dom';
import Warning from './typography/Warning';

const NoPlayers = () => (
  <Warning>
    No players, don't worry <Link to="/add-player">add some</Link>
  </Warning>
);

export default NoPlayers;
