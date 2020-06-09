import React, { useEffect, useState } from 'react';
import axios from 'axios';

function risco(indice) {
  if (indice < 301) {
    return 'Nenhum';
  } else if (indice < 501) {
    return 'Pequeno';
  } else if (indice < 1001) {
    return 'Médio';
  } else if (indice < 4001) {
    return 'Grande';
  } else {
    return 'Perigoso';
  }
}

function indiceInflamabilidade(tempAr, tensaoMaxVapor, tensaoRealVapor) {
  var deficitSaturacao = tensaoMaxVapor - tensaoRealVapor;
  var indiceInflamabilidade = deficitSaturacao * tempAr;
  return indiceInflamabilidade;
}

export default function Clima() {
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    let getWeather = async (lat, long) => {
      try {
        let res = await axios.get(
          'http://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              lat: lat,
              lon: long,
              appid: '99af0e9ea489df1ee66b6156a9e06a4b',
              lang: 'pt',
              units: 'metric'
            }
          }
        );
        setWeather(res.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    getWeather('-18.574313', '-46.514105');
  }, []);

  if (!weather) {
    return <div>Carregando o clima...</div>;
  }

  const {
    main: { temp, temp_max, temp_min, pressure, humidity }
  } = weather;

  const inflamabilidade = indiceInflamabilidade(temp, 35.9, 17.6);
  return (
    <div>
      <h3>Clima nas suas Coordenadas ({weather.weather[0].description})</h3>
      <hr />
      <ul>
        <li>Temperatura atual: {temp}°</li>
        <li>Temperatura máxima: {temp_max}°</li>
        <li>Temperatura minima: {temp_min}°</li>
        <li>Pressão: {pressure} hpa</li>
        <li>Humidade: {humidity}%</li>
        <li>Indice de imflamabilidade:{inflamabilidade}</li>
        <li>Risco de incêndio:{risco(inflamabilidade)}</li>
      </ul>
    </div>
  );
}
