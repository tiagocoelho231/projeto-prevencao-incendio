import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { px2rem } from '../util';
import { API } from '../config';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 64, 0.8);
  border-radius: ${px2rem(8)} 0 0 0;
  color: #fff;
  padding: ${px2rem(20)};
  bottom: 0;
  position: fixed;
  right: 0;
`;

export default function Clima() {
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    let getWeather = async () => {
      try {
        const { data } = await API.get('/clima');
        console.log('data', data);
        // setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather();
  }, []);

  if (!weather) {
    return (
      <Wrapper>
        <p>Buscando informações sobre o clima...</p>
      </Wrapper>
    );
  }

  const {
    main: { temp, temp_max, temp_min, pressure, humidity }
  } = weather;

  return (
    <Wrapper>
      <h2>Clima na área ({weather.weather[0].description})</h2>
      <ul>
        <li>Temperatura atual: {temp}°</li>
        <li>Temperatura máxima: {temp_max}°</li>
        <li>Temperatura minima: {temp_min}°</li>
        <li>Pressão: {pressure} hpa</li>
        <li>Umidade: {humidity}%</li>
        <li>
          Índice de inflamabilidade dia 1:{' '}
          {/* {getIndiceInflamabilidade(temp, 35.9, 17.6).toFixed(2)} */}
        </li>
        <li>
          Risco de incêndio dia 1:{' '}
          {/* {risco(getIndiceInflamabilidade(temp, 35.9, 17.6))} */}
        </li>
        <li>
          Índice de inflamabilidade dia 2 (sem chuva):{' '}
          {/* {somatorioInflamabilidade(
            0,
            getIndiceInflamabilidade(temp, 35.9, 17.6),
            getIndiceInflamabilidade(temp, 35.9, 17.6)
          ).toFixed(2)} */}
        </li>
        <li>
          Risco de incêndio dia 2 (sem chuva):{' '}
          {/* {risco(
            somatorioInflamabilidade(
              0,
              getIndiceInflamabilidade(temp, 35.9, 17.6),
              getIndiceInflamabilidade(temp, 35.9, 17.6)
            )
          )} */}
        </li>
      </ul>
    </Wrapper>
  );
}
