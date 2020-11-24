import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { px2rem } from '../util';

import { ReactComponent as IconHome } from '../assets/icon-home.svg';
import { ReactComponent as IconLocation } from '../assets/icon-location.svg';
import { ReactComponent as IconWarning } from '../assets/icon-warning.svg';
import { ReactComponent as IconInfo } from '../assets/icon-info.svg';
import { ReactComponent as IconMenu } from '../assets/icon-menu.svg';
import { ReactComponent as IconClose } from '../assets/icon-close.svg';

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(111, 166, 78, 1) 0%,
    rgba(117, 176, 81, 1) 35%,
    rgba(117, 176, 81, 1) 65%,
    rgba(111, 166, 78, 1) 100%
  );

  @media screen and (min-width: 998px){
    max-width: ${px2rem(280)};
  }

  @media screen and (max-width: 997px){
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    &.active{
    transform: translateX(0);
    }
  }
`;

const MenuList = styled.ul`
  @media screen and (max-width: 997px){
    padding-top: 50px;
    >button{
      position: absolute;
      top: 25px;
      right: 20px;
      outline: none;
      svg{
        height: 30px;
        width: 30px;
      }
    }
  }
  li {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    @media screen and (min-width: 998px){
      &:hover {
        background-color: rgba(94, 139, 67, 0.7);
      }
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
      @media screen and (max-width: 997px){
        padding-left: 50px;
      }
    }
  }
`;

const TopBar = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(117, 176, 81, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong{
    color: #000;
    margin-left: 15px;
  }
  button{
    height: 100%;
    padding: 17px 15px 17px 0;
    outline: none;
    svg{
      width: auto;
      height: 100%;
    }
  }
`;

export default function SideBar() {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <>
      <TopBar className="mobile">
        <strong>Prevenção de <br/> Incêndio</strong>
        <button onClick={() => {setMenuActive(true)}} >
          <IconMenu />
        </button>
      </TopBar>
      <Wrapper className={`${isMenuActive ? "active" : ""}`}>
        <MenuList>
          <button className="mobile" onClick={() => {setMenuActive(false)}} >
            <IconClose />
          </button>
          <li>
            <Link to="/" onClick={() => {setMenuActive(false)}}>
              <IconHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => {setMenuActive(false)}}>
              <IconLocation />
              Mapa
            </Link>
          </li>
          <li>
            <Link to="/notificacao" onClick={() => {setMenuActive(false)}}>
              <IconWarning />
              Notificações
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => {setMenuActive(false)}}>
              <IconInfo />
              Sobre a Aplicação
            </Link>
          </li>
        </MenuList>
      </Wrapper>
    </>
  );
}
