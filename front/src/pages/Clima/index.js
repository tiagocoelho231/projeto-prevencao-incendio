import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../config';

import {
  Container,
  Content,
  LocationDate,
  CurrentTemperature,
  CurrentStats,
  TodayWeather,
  WeekWeather,
  InfoFogo
} from './styles';

export default function Clima() {
  const [days, setDays] = useState();
  const [weather, setWeather] = useState();
  const [infoFire, setInfoFire] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://apiprevmet3.inmet.gov.br/previsao/3136306'
        );
        setWeather(Object.values(Object.values(data)[0]));
        setDays(Object.keys(Object.values(data)[0]));
        console.log('data', Object.values(Object.values(data)[0]));
      } catch (error) {
        console.error(error);
      }
    }
    let getWeather = async () => {
      try {
        const { data } = await API.get('/clima');
        console.log('Clima', data);
        setInfoFire(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather();
    fetchData();
  }, []);

  function getRisk(risk) {
    switch (risk) {
      case 'Baixo':
        return 'baixo';
      case 'Médio':
        return 'medio';
      case 'Alto':
        return 'alto';
      case 'Muito alto':
        return 'muito-alto';
      default:
        return 'muito-alto';
    }
  }

  return (
    <Container>
      <Content>
        <LocationDate>
          <h1>João Pinheiro, MG</h1>
          <div>
            {days && weather[0]?.tarde.dia_semana}{' '}
            {days && days[0]?.slice(0, 5)}
          </div>
        </LocationDate>

        <CurrentTemperature>
          <div className="img-wrapper">
            <img src={weather && weather[0]?.tarde.icone} alt=""></img>
          </div>
          <div className="temperature-wrapper">
            <span>Agora</span>
            <strong>{infoFire && infoFire.temperature + '°C'}</strong>
          </div>
        </CurrentTemperature>

        <CurrentStats>
          <div>
            <strong>{weather && weather[0]?.tarde.temp_min + '°C'}</strong>
            <p>Mínima</p>
            <strong>{weather && weather[0]?.tarde.temp_max + '°C'}</strong>
            <p>Máxima</p>
          </div>
          <div>
            <strong>{weather && weather[0]?.tarde.temp_min_tende}</strong>
            <p>Tendência temp mín</p>
            <strong>{weather && weather[0]?.tarde.temp_max_tende}</strong>
            <p>Tendência temp máx</p>
          </div>
          <div>
            <strong>{weather && weather[0]?.tarde.umidade_max + '%'}</strong>
            <p>Umidade mín</p>
            <strong>{weather && weather[0]?.tarde.umidade_min + '%'}</strong>
            <p>Umidade máx</p>
          </div>
        </CurrentStats>

        <InfoFogo>
          <div>
            <div>
              <strong>{infoFire && infoFire.humidity + '%'}</strong>
              <p>Umidade</p>
            </div>
            <div>
              <strong>{infoFire && infoFire.pressure + ' mbar'}</strong>
              <p>Pressão</p>
            </div>
            <div>
              <strong>{infoFire && infoFire.windSpeed + ' km/h'}</strong>
              <p>Vento</p>
            </div>
          </div>
          <div>
            <div>
              {infoFire && (
                <h1 className={getRisk(infoFire.fireRisk)}>
                  {infoFire.fireRisk}
                </h1>
              )}

              <p>Risco de fogo hoje</p>
            </div>
            <div>
              {infoFire && (
                <h2 className={getRisk(infoFire.yesterdayFireRisk)}>
                  {infoFire.yesterdayFireRisk}
                </h2>
              )}
              <p>Risco de fogo ontem</p>
            </div>
          </div>
        </InfoFogo>

        <TodayWeather>
          <h2>Clima hoje</h2>
          <div>
            <div>
              <strong>Manhã</strong>
              <img src={weather && weather[0]?.manha.icone} alt=""></img>
              <p>{weather && weather[0]?.manha.resumo}</p>
            </div>
            <div>
              <strong>Tarde</strong>
              <img src={weather && weather[0]?.tarde.icone} alt=""></img>
              <p>{weather && weather[0]?.tarde.resumo}</p>
            </div>
            <div>
              <strong>Noite</strong>
              <img src={weather && weather[0]?.noite.icone} alt=""></img>
              <p>{weather && weather[0]?.noite.resumo}</p>
            </div>
          </div>
        </TodayWeather>

        <WeekWeather>
          <h2>Próximos 4 dias</h2>
          <div>
            {weather &&
              weather.map((dia, key) => {
                if (!key) return null;
                if (key === 1) {
                  return (
                    <div key={key}>
                      <div>
                        <strong>{dia.tarde.dia_semana}</strong>
                        <p>{days && days[key].slice(0, 5)}</p>
                      </div>
                      <div>
                        <img src={dia.tarde.icone} alt="Sunny"></img>
                        <p>{dia.tarde.resumo}</p>
                      </div>
                      <div>
                        <strong>{dia.tarde.temp_min + '°'}</strong>
                        <p>Min</p>
                      </div>
                      <div>
                        <strong>{dia.tarde.temp_max + '°'}</strong>
                        <p>Max</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={key}>
                      <div>
                        <strong>{dia.dia_semana}</strong>
                        <p>{days && days[key].slice(0, 5)}</p>
                      </div>
                      <div className="icon">
                        <img src={dia.icone} alt="Sunny"></img>
                        <p>{dia.resumo}</p>
                      </div>
                      <div>
                        <strong>{dia.temp_min + '°'}</strong>
                        <p>Min</p>
                      </div>
                      <div>
                        <strong>{dia.temp_max + '°'}</strong>
                        <p>Max</p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </WeekWeather>
      </Content>
    </Container>
  );
}
