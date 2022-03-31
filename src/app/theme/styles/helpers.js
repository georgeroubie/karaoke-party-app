import { css } from 'styled-components';

const setAnimation = (value) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${value};
  }
`;

const setTransition = (value) => css`
  @media (prefers-reduced-motion: no-preference) {
    transition: ${value};
  }
`;

const textTruncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { setAnimation, setTransition, textTruncate };
