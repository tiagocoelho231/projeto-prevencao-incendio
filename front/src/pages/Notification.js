import React from 'react';
import styled from 'styled-components';

import { px2rem } from '../util';

import IconRain from '../assets/icon-rain.png';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${px2rem(80)} ${px2rem(40)};
    li {
      width: 100%;
      height: ${px2rem(140)};
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        border-bottom: 1px solid #aaaaaa;
      }

      > div {
        margin-right: ${px2rem(14)};
      }
      > p {
        color: #757575;
      }
    }
  }
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ececec;
  width: ${px2rem(80)};
  height: ${px2rem(80)};
  p {
    color: #757575;
  }
  strong {
    color: #757575;
  }
`;

const WeatherIcon = styled.div`
  max-width: ${px2rem(80)};
  img {
    width: 100%;
  }
`;

const MaxMin = styled.div`
  span {
    color: #000;
  }
  strong {
    color: #757575;
  }
`;

function Notification() {
  return (
    <Content>
      <ul>
        <li>
          <Day>
            <strong>10</strong>
            <p>ter</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>24</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>36</span>
            </p>
          </MaxMin>

          <p>
            Sol e aumento de nuvens de manhã.
            <br />
            Pancadas de chuva à tarde e à noite.
          </p>
        </li>

        <li>
          <Day>
            <strong>11</strong>
            <p>qua</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>21</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>33</span>
            </p>
          </MaxMin>

          <p>
            Sol com algumas nuvens.
            <br />
            Chove rápido durante o dia e à noite.
          </p>
        </li>

        <li>
          <Day>
            <strong>12</strong>
            <p>quin</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>24</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>36</span>
            </p>
          </MaxMin>

          <p>
            Sol e aumento de nuvens de manhã.
            <br />
            Pancadas de chuva à tarde e à noite.
          </p>
        </li>

        <li>
          <Day>
            <strong>10</strong>
            <p>ter</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>21</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>33</span>
            </p>
          </MaxMin>

          <p>
            Sol com algumas nuvens.
            <br />
            Chove rápido durante o dia e à noite.
          </p>
        </li>

        <li>
          <Day>
            <strong>10</strong>
            <p>ter</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>24</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>36</span>
            </p>
          </MaxMin>

          <p>
            Sol e aumento de nuvens de manhã.
            <br />
            Pancadas de chuva à tarde e à noite.
          </p>
        </li>

        <li>
          <Day>
            <strong>10</strong>
            <p>ter</p>
          </Day>
          <WeatherIcon>
            <img src={IconRain} alt="Icon de chuva" />
          </WeatherIcon>

          <MaxMin>
            <p>
              <strong>Mínima:</strong> <span>21</span>
            </p>
            <p>
              <strong>Máxima:</strong> <span>33</span>
            </p>
          </MaxMin>

          <p>
            Sol com algumas nuvens.
            <br />
            Chove rápido durante o dia e à noite.
          </p>
        </li>
      </ul>
    </Content>
  );
}

export default Notification;
