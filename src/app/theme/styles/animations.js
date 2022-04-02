import { css } from 'styled-components';

const animations = css`
  @keyframes winner {
    0% {
      background-color: ${({ theme: { colors } }) => colors.successBackgroundPrimary};
    }
    25% {
      background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
    }
    50% {
      background-color: ${({ theme: { colors } }) => colors.successBackgroundPrimary};
    }
    75% {
      background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
    }
    100% {
      background-color: ${({ theme: { colors } }) => colors.successBackgroundPrimary};
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export { animations };
