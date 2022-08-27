import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../../state/Context';
import { setAnimation } from '../../theme/styles/helpers';

const PlayerName = styled.a`
  padding: 0 ${({ theme: { spacing } }) => spacing.small};
  text-decoration: none;

  &:before,
  &:after {
    content: '"';
  }

  ${({ $animate }) =>
    $animate &&
    css`
      ${setAnimation('winner infinite 1s linear')}

      @media (prefers-reduced-motion: reduce) {
        background-color: ${({ theme: { colors } }) => colors.successBackgroundPrimary};
      }
    `};
`;

const ActivePlayer = ({ animate }) => {
  const { state } = useContext(AppContext);

  return state.playersList.map((player) => {
    if (player.active) {
      return (
        <PlayerName $animate={animate} key={player.id} href={player.song} target="_blank" rel="noreferrer">
          {player.name}
        </PlayerName>
      );
    }
    return null;
  });
};

ActivePlayer.propTypes = {
  animate: PropTypes.bool,
};

ActivePlayer.defaultProps = {
  animate: false,
};

export default ActivePlayer;
