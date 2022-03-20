import React from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  user-select: none;
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const NavLink = styled(_NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => spacing.normal};
  text-decoration: none;
  border-right: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};

  ${({ $itemsCount }) =>
    $itemsCount &&
    css`
      width: ${100 / $itemsCount}%;
    `}

  &.active {
    background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  }

  &:last-child {
    border-right: 0;
  }
`;

const Icon = styled.span`
  font-size: 2rem;
`;

const Text = styled.span`
  display: none;

  @media (min-width: 750px) {
    & {
      display: inline-block;
      margin-left: ${({ theme: { spacing } }) => spacing.normal};
    }
  }
`;

const items = [
  { icon: 'videogame_asset', text: 'PLAY', url: '/' },
  { icon: 'people', text: 'PLAYERS', url: '/players' },
  { icon: 'group_add', text: 'ADD NEW', url: '/add-player' },
  { icon: 'settings', text: 'SETTINGS', url: '/settings' },
];

const Menu = () => (
  <>
    <Title onClick={() => (window.location.href = '/')}>Karaoke Party</Title>
    <Nav>
      {items.map(({ icon, text, url }) => (
        <NavLink
          to={url}
          key={icon}
          className={({ isActive }) => (isActive ? 'active' : null)}
          $itemsCount={items.length}
        >
          <Icon className="material-icons">{icon}</Icon>
          <Text>{text}</Text>
        </NavLink>
      ))}
    </Nav>
  </>
);

export default Menu;
