import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import _Icon from '../components/ui/Icon';
import _Logo from '../svg/Logo';

const Logo = styled(_Logo)`
  user-select: none;
  display: block;
  margin: ${({ theme: { spacing } }) => spacing.large} auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
  cursor: pointer;
  max-width: 400px;

  @media (min-width: ${({ theme: { screens } }) => screens.medium}) {
    margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
    max-width: 500px;
  }
`;

const NavLink = styled(_NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  text-decoration: none;
  border-right: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};

  &.active {
    background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};

  ${NavLink} {
    flex-grow: 1;
    flex-basis: 0;

    &:last-child {
      border-right: 0;
    }
  }
`;

const Icon = styled(_Icon)`
  width: 2rem;
  height: auto;
`;

const Text = styled.span`
  display: none;

  @media (min-width: ${({ theme: { screens } }) => screens.medium}) {
    display: inline-block;
    margin-left: ${({ theme: { spacing } }) => spacing.normal};
  }
`;

const items = [
  { icon: 'video_game_controller', text: 'GAME', url: '/' },
  { icon: 'people', text: 'ADD PLAYER', url: '/add-player' },
  { icon: 'info', text: 'INFO', url: '/info' },
];

const Menu = () => (
  <>
    <Logo onClick={() => (window.location.href = '/')} />
    <Nav>
      {items.map(({ icon, text, url }) => (
        <NavLink to={url} key={icon}>
          <Icon type={icon} />
          <Text>{text}</Text>
        </NavLink>
      ))}
    </Nav>
  </>
);

export default Menu;
