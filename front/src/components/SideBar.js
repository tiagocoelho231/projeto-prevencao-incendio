import React from 'react';
import styled from 'styled-components';

import { px2rem } from '../util';

import {ReactComponent as IconHome} from "../assets/icon-home.svg";
import {ReactComponent as IconLocation} from "../assets/icon-location.svg";
import {ReactComponent as IconWarning} from "../assets/icon-warning.svg";
import {ReactComponent as IconInfo} from "../assets/icon-info.svg";

const Wrapper = styled.div`
    width: 100%;
    max-width: ${px2rem(280)};
    height: 100vh;
    position: relative;
    left: 0;
    background: linear-gradient(90deg, rgba(111,166,78,1) 0%, rgba(117,176,81,1) 35%, rgba(117,176,81,1) 65%, rgba(111,166,78,1) 100%);
    font-family: "Roboto";
`;

const MenuList = styled.div`
  li{
    display: flex;
    align-items: center;
    padding: ${px2rem(15)} ${px2rem(20)};
    transition: all .4s ease-in-out;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{ 
      background-color: rgba(94, 139, 67, .7);
    }
    svg{
      margin-right: ${px2rem(18)};
      width: ${px2rem(30)};
      height: ${px2rem(30)};
      path, circle{
        fill: rgb(1, 13, 22) !important;
      }
    }
    p{
      margin-right: ${px2rem(10)};
      font-weight: 500;
      color: rgb(1, 13, 22);
    }
  }
`;

export default function SideBar() {
  return(
      <Wrapper>
        <MenuList>
          <li>
            <IconHome />
            <p>Home</p>
          </li>
          <li>
            <IconLocation />
            <p>Mapa</p>
          </li>
          <li>
            <IconWarning />
            <p>Notificações</p>
          </li>
          <li>
            <IconInfo />
            <p>Sobre a Aplicação</p>
          </li>
        </MenuList>
      </Wrapper>
  )
}
