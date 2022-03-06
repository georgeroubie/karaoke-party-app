import React from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #000;
`;

const NavLink = styled(_NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  color: #000;
  text-decoration: none;
  width: 33%;
  border-right: 2px solid #000;

  &.active {
    background-color: #000;
    color: #fff;
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

  @media (min-width: 600px) {
    & {
      display: inline-block;
      margin-left: 10px;
    }
  }
`;

const items = [
  { icon: 'videogame_asset', text: 'PLAY', url: '/' },
  { icon: 'people', text: 'PLAYERS', url: '/players' },
  { icon: 'group_add', text: 'ADD NEW', url: '/add-player' },
];

const Menu = () => (
  <Wrapper>
    {items.map(({ icon, text, url }) => (
      <NavLink to={url} key={icon} className={({ isActive }) => (isActive ? 'active' : null)}>
        <Icon className="material-icons">{icon}</Icon>
        <Text>{text}</Text>
      </NavLink>
    ))}
  </Wrapper>
);

export default Menu;
