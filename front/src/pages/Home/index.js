import React from 'react';
import { useSelector } from 'react-redux';

import { Map, Menu, Clima } from '../../components';
import { Content, Content1, Content2, Content3, History, Weather } from './styles';

import IconRain from '../../assets/icon-rain.png';
import Mapa1 from '../../assets/mapa-1.png';
import Mapa2 from '../../assets/mapa-2.png';

export default function Home() {
  const clima = useSelector(({ clima }) => clima);

  console.log('clima', clima);

  return (
    <Content>
      <Weather>
        <Content1>
          <h2>
            <span>Agora em </span>
            <strong>João Pinheiro, MG</strong>
          </h2>
          <div>
            <img src={IconRain} alt="Chuva" />
            {clima && <p>{clima.temperature + 'º'}</p>}
          </div>
          <ul>
            <li>
              <p className="bold">Muitas nuvens</p>
              <p>
                <span>Sensação - 24°</span>
              </p>
            </li>
            <li>
              <p>
                <strong className="uppercase">Vento</strong>
              </p>
              <p>{clima && <span>{clima.windSpeed + ' m/s'}</span>}</p>
            </li>
            <li>
              <p>
                <strong className="uppercase">Umidade</strong>
              </p>
              <p>{clima && <span>{clima.humidity + '%'}</span>}</p>
            </li>
            <li>
              <p>
                <strong className="uppercase">Pressão</strong>
              </p>
              <p>{clima && <span>{clima.pressure + ' hPa'}</span>}</p>
            </li>
          </ul>
          <a>Previsão pra hoje {'>'}</a>
        </Content1>

        <Content2>
          <h2>Registrados</h2>
          <ul>
            <li>
              <strong>Raios</strong>
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
              <img src={Mapa1} alt="mapa-1" />
              <a href="#">Satélites {'>'}</a>
            </li>
            <li>
              <img src={Mapa2} alt="mapa-2" />
              <a href="#">Chuva agora {'>'}</a>
            </li>
          </ul>
        </Content2>

        <Content3>
          <h2>Risco de incêndio</h2>
          <ul>
            <li>
              <strong>Hoje</strong>
              {clima && <span>{clima.fireRisk}</span>}
            </li>
            <li>
              <strong>Ontem</strong>
              {clima && <span>{clima.yesterdayFireRisk}</span>}
            </li>
          </ul>
          <a>Dados historicos detalhados {'>'}</a>
        </Content3>
      </Weather>

      <History>
        <h2>Dados Históricos de João Pinheiro</h2>
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
            <small>
              "As médias climatológicas são valores calcdivados a partir de uma
              série de dados de 30 anos
            </small>
          </div>
        </div>
      </History>
    </Content>
  );
}

{
  /* <Map /> 
      <Menu />
      <Clima />*/
}
