import { css } from 'styled-components';

const animations = css`
  @keyframes winner {
    from {
      background-color: ${({ theme: { colors } }) => colors.successPrimary};
    }
    to {
      background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
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
