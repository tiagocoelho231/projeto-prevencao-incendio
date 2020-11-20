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
  background-color: #f7f7f7; 
`;

const Content = styled.div`
  width: 100%;
  padding: ${px2rem(110)} ${px2rem(40)} 0;
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
  height:${px2rem(230)};
  display: flex;
  flex-direction: column;
  margin-top: ${px2rem(50)};
  >div{
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: ${px2rem(20)};
    >div{
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: ${px2rem(12)};
      strong{
        color: #7a7a7a;
        font-size: ${px2rem(16)};
        margin-left: ${px2rem(8)};
      }
      >div{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          position: absolute;
          top: 0;
          left: 0;
          color: #464646;
          font-size: ${px2rem(16)};
        }
        span{
          width: ${px2rem(12)};
          height: 100%;
          background-color: #3080cd;
          border-radius: ${px2rem(10)};
          margin-top: ${px2rem(28)};
        }
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: ${px2rem(350)};
      p{
        color: #7a7a7a;
        font-size: ${px2rem(16)};
        text-align: center;
      }
      small{
        color: #7a7a7a;
        font-size: ${px2rem(14)};
        text-align: center;
        margin-top: ${px2rem(7)};
      }
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
                <span className="bold">Muitas nuvens</span>
                <span>Sensação - 24°</span>
              </li>
              <li>
                <strong className="uppercase">Vento</strong>
                <span>NNE - 5km/h</span>
              </li>
              <li>
                <strong className="uppercase">Umidade</strong>
                <span>46%</span>
              </li>
              <li>
                <strong className="uppercase">Pressão</strong>
                <span>936hPa</span>
              </li>
              <a>Previsão pra hoje {">"}</a>
            </ul>
          </Content1>

          <Content2>
            <strong>Registrados</strong>
            <ul>
              <li>
                <strong>raios</strong>
                <p>0 na última hora</p>
              </li>
              <li>
                <strong>Queimadas</strong>
                <p>0 focos</p>
              </li>
            </ul>
            <strong>Explore os mapas</strong>
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
            <strong>Risco de incêndio</strong>
            <ul>
              <li>
                <strong>Hoje</strong>
                <span>Médio</span>
              </li>
              <li>
                <strong>Ontem</strong>
                <span>Baixo</span>
              </li>
            </ul>
            <a>Dados historicos detalhados {">"}</a>
          </Content3>
        </Weather>

        <History>
          <strong>Dados Históricos de João Pinheiro</strong>
          <div>
            <div>
              <div>
                <p>182mm</p>
                <span />
              </div>
              <strong>Média de chuva nos últimos 30 anos</strong>
            </div>
            
            <div>
              <div>
                <p>2%</p>
                <span />
              </div>
              <strong>Média mensal de chuva atingida até 08/11/2020</strong>
            </div>
            
            <div className="info">
              <p>Os dados representam o comportamento da chuva do mês</p>
              <small>"As médias climatológicas são valores calcdivados a partir de uma série de dados de 30 anos</small>
            </div>
          </div>
        </History>
      </Content>
      {/* <Map /> 
      <Menu />
      <Clima />*/}
    </Page>
  );
}
