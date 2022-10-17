import { css } from 'styled-components';

function setAnimation(value) {
  return css`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${value};
    }
  `;
}

function setTransition(value) {
  return css`
    @media (prefers-reduced-motion: no-preference) {
      transition: ${value};
    }
  `;
}

const textTruncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const resetList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export { setAnimation, setTransition, textTruncate, resetList };
