import React from 'react';

import { Content, Day, MaxMin, WeatherIcon } from './styles';

import IconRain from '../../assets/icon-rain.png';


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
