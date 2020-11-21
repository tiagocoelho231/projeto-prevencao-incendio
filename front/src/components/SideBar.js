import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { px2rem } from '../util';

import { ReactComponent as IconHome } from '../assets/icon-home.svg';
import { ReactComponent as IconLocation } from '../assets/icon-location.svg';
import { ReactComponent as IconWarning } from '../assets/icon-warning.svg';
import { ReactComponent as IconInfo } from '../assets/icon-info.svg';

const Wrapper = styled.nav`
  width: 100%;
  max-width: ${px2rem(280)};
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(111, 166, 78, 1) 0%,
    rgba(117, 176, 81, 1) 35%,
    rgba(117, 176, 81, 1) 65%,
    rgba(111, 166, 78, 1) 100%
  );
`;

const MenuList = styled.ul`
  li {
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: rgba(94, 139, 67, 0.7);
    }
    svg {
      margin-right: ${px2rem(18)};
      width: ${px2rem(30)};
      height: ${px2rem(30)};
      path,
      circle {
        fill: rgb(1, 13, 22) !important;
      }
    }
    a {
      align-items: center;
      color: rgb(1, 13, 22);
      display: flex;
      font-weight: 500;
      padding: ${px2rem(20)};
    }
  }
`;

export default function SideBar() {
  return (
    <Wrapper>
      <MenuList>
        <li>
          <Link to="/">
            <IconHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconLocation />
            Mapa
          </Link>
        </li>
        <li>
          <Link to="/notificacao">
            <IconWarning />
            Notificações
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconInfo />
            Sobre a Aplicação
          </Link>
        </li>
      </MenuList>
    </Wrapper>
  );
}
