import React from 'react';
import styled from 'styled-components';

import { px2rem } from '../util';
import { Map, Menu, Clima, SideBar } from '../components';

import IconRain from "../assets/icon-rain.png";
import Mapa1 from "../assets/mapa-1.png";
import Mapa2 from "../assets/mapa-2.png";

const Page = styled.main`
  position: relative;
  display: flex;
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  padding: ${px2rem(170)} ${px2rem(100)};
  a{
    display: block;
    font-size: ${px2rem(16)};
    font-weight: bold;
    color: #0080cd;
    padding-top: ${px2rem(20)};
  }
  strong{
    color: rgb(0, 73, 131);
    margin-right: ${px2rem(6)};
  }
  span{
    color: rgb(160, 160, 160);
  }
`;

const Weather = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  >div{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  p{
    color: #000;
    font-size: ${px2rem(16)};
  } 
`;

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${px2rem(400)};
  >p{
    text-align: center;
  }
  >div{
    display: flex;
    align-items: center;
    margin-top: ${px2rem(25)};
    img{
      width: ${px2rem(125)};
      margin-right: ${px2rem(10)};
    }
    h2{
      color: #000;
      font-size: ${px2rem(55)};
    }
  }
  ul{
    width: 100%;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${px2rem(15)} 0;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
    }
  }
`;

const Content2 = styled.div`
  max-width: ${px2rem(420)};
  display: flex;
  flex-direction: column;
  margin: 0 ${px2rem(35)} !important;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${px2rem(30)};
    li{
      padding: ${px2rem(15)} 0;
      strong{
        color: #000;
      }
      a{
        text-align: center;
      }
      img{
        width: ${px2rem(195)};
        border-radius: 23px;
      }
    }
  }
`;

const Content3 = styled.div`
  max-width: ${px2rem(350)};
  ul{
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${px2rem(15)} 0;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
    }
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${px2rem(50)};
  >div{
    height:${px2rem(200)};
    display: flex;
    align-items: center;
    strong{
      color: #000;
      font-size: ${px2rem(16)};
    }
  }
`;

export default function Home() {
  return (
    <Page>
      <SideBar />
      <Content>
        <Weather>
          <Content1>
            <p><strong>Agora em</strong><span>João Pinheiro, MG</span></p>
            <div>
              <img src={IconRain} alt="Icone de chuva"/>
              <h2>24°</h2>
            </div>
            <ul>
              <li>
                <p><span className="bold">Muitas nuvens</span></p>
                <p><span>Sensação - 24°</span></p>
              </li>
              <li>
                <p><strong className="uppercase">Vento</strong></p>
                <p><span>NNE - 5km/h</span></p>
              </li>
              <li>
                <p><strong className="uppercase">Umidade</strong></p>
                <p><span>46%</span></p>
              </li>
              <li>
                <p><strong className="uppercase">Pressão</strong></p>
                <p><span>936hPa</span></p>
              </li>
              <a>Previsão pra hoje {">"}</a>
            </ul>
          </Content1>

          <Content2>
            <p><strong>Registrados</strong></p>
            <ul>
              <li>
                <p><strong>raios</strong></p>
                <p>0 na última hora</p>
              </li>
              <li>
                <p><strong>Queimadas</strong></p>
                <p>0 focos</p>
              </li>
            </ul>
            <p><strong>Explore os mapas</strong></p>
            <ul>
              <li>
                <img src={Mapa1} alt="mapa-1"/>
                <a href="#">Satélites {">"}</a>
              </li>
              <li>
                <img src={Mapa2} alt="mapa-2"/>
                <a href="#">Chuva agora {">"}</a>
              </li>
            </ul>
          </Content2>

          <Content3>
            <p><strong>Risco de incêndio</strong></p>
            <ul>
              <li>
                <p><strong>Hoje</strong></p>
                <p><span>Médio</span></p>
              </li>
              <li>
                <p><strong>Ontem</strong></p>
                <p><span>Baixo</span></p>
              </li>
            </ul>
            <a>Dados historicos detalhados {">"}</a>
          </Content3>
        </Weather>

        {/* <History>
          <p><strong>Dados Históricos de João Pinheiro</strong></p>
          <div>
            <div><p><strong>Média de chuva nos últimos 30 anos</strong></p></div>
            <div><p><strong>Média de chuva atingida até 08/11/2020</strong></p></div>
            <div><p>Os dados representam o comportamento da chuva do mês</p><small>"As médias climatológicas são valores calcdivados a partir de uma série de dados de 30 anos</small></div>
          </div>
        </History> */}
      </Content>
      {/* <Map /> 
      <Menu />
      <Clima />*/}
    </Page>
  );
}
