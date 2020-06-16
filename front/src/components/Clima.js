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
function somatorioInflamabiliidade(chuva, risco, riscoDiario) {
  if (chuva < 2) {
    riscoDiario = riscoDiario + risco;
  }
  else if (chuva < 5) {
    riscoDiario = (75 * riscoDiario) / 100;
    riscoDiario = riscoDiario + risco;
  }
  else if (chuva < 8) {
    riscoDiario = (50 * riscoDiario) / 100;
    riscoDiario = riscoDiario + risco;
  }
  else if (chuva < 10) {
        riscoDiario = risco;
  }
  else if (chuva >10){
        riscoDiario = 0;
  }
  return riscoDiario;

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

  
  return (
    <div>
      <div className="content">
        <h3>Clima nas suas Coordenadas ({weather.weather[0].description})</h3>
        <ul>

          <div className="">TemperaturaTemperatura atual: {temp}°</div>
          <div className="">Temperatura máxima: {temp_max}°</div>
          <div className="">Temperatura minima: {temp_min}°</div>
          <div className="">Pressão: {pressure} hpa</div>
          <div className="">Humidade: {humidity}%</div>
          <div className="">Indice de inflamabilidade dia 1:{indiceInflamabilidade(temp,35.9, 17.6)}</div>
          <div className="">Risco de incêndio dia 1:{risco(indiceInflamabilidade(temp, 35.9, 17.6))}</div>
          <div className="">Indice de inflamabilidade dia 2(sem chuva):{somatorioInflamabiliidade(0,indiceInflamabilidade(temp, 35.9, 17.6),indiceInflamabilidade(temp, 35.9, 17.6))}</div>
          <div className="">Risco de incêndio dia 2(sem chuva):{risco(somatorioInflamabiliidade(0,indiceInflamabilidade(temp, 35.9, 17.6),indiceInflamabilidade(temp, 35.9, 17.6)))}</div>
         

        </ul>
      </div>
    </div>);
}

