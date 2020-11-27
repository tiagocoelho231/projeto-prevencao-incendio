import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../config';

import { Container, Content, LocationDate, CurrentTemperature, CurrentStats, TodayWeather, WeekWeather } from './styles';

export default function Clima(){
  const [data, setData] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get('https://apiprevmet3.inmet.gov.br/previsao/3136306');
        setData(Object.values(Object.values(result.data)[0]));
        setDays(Object.keys(Object.values(result.data)[0]));
      } catch (error) {
        console.error(error);
      }
    }
    let getWeather = async () => {
      try {
        const { data } = await API.get('/clima');
        console.log('data', data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather();
    fetchData();
  }, [])

  return(
    <Container>
      <Content>

        <LocationDate>
          <h1>João Pinheiro, MG</h1>
          <div>{days && data[0].manha.dia_semana} {days && days[0].slice(0,5)}</div>
        </LocationDate>


        <CurrentTemperature>
          <div className="img-wrapper">
            <img src={data && data[0].manha.icone} alt=""></img>
          </div>
          <div className="temperature-wrapper">
            <strong >{data && (data[0].manha.temp_max + data[0].manha.temp_min)/2}&deg;</strong>
            <p>{data && data[0].manha.resumo}</p>
          </div>
        </CurrentTemperature>


        <CurrentStats>
          <div>
            <strong>{data && data[0].tarde.temp_max}&deg;</strong>
            <p>Máxima</p>
            <strong>{data && data[0].tarde.temp_min}&deg;</strong>
            <p>Mínima</p>
          </div>
          <div>
            <strong>{data && data[0].tarde.int_vento}</strong>
            <p>Ventos</p>
            <strong>0%</strong>
            <p>Chuva</p>
          </div>
          <div>
            <strong>{data && data[0].tarde.umidade_max}</strong>
            <p>Umidade mín</p>
            <strong>{data && data[0].tarde.umidade_min}</strong>
            <p>Umidade máx</p>
          </div>
        </CurrentStats>

        <TodayWeather>
          <h2>Clima hoje</h2>
          <div>
            <div>
              <strong>Manhã</strong>
              <img src={data && data[0].manha.icone} alt=""></img>
              <p>{data && data[0].manha.resumo}</p>
            </div>
            <div>
              <strong>Tarde</strong>
              <img src={data && data[0].tarde.icone} alt=""></img>
              <p>{data && data[0].tarde.resumo}</p>
            </div>
            <div>
              <strong>Noite</strong>
              <img src={data && data[0].noite.icone} alt=""></img>
              <p>{data && data[0].noite.resumo}</p>
            </div>
          </div>
        </TodayWeather>

        <WeekWeather>
          <h2>Próximos 4 dias</h2>
          <div>
            {data && data.map((dia, key) => {
              if(!key) return null;
              if(key === 1){
                return(
                  <div key={key}>
                    <div>
                      <strong>{dia.manha.dia_semana}</strong>
                      <p>{days && days[key].slice(0,5)}</p>
                    </div>
                    <div>
                      <img src={dia.manha.icone} alt="Sunny"></img>
                    </div>
                    <div>
                      <strong>10&deg;</strong>
                      <p>Max</p>
                    </div>
                    <div>
                      <strong>21&deg;</strong>
                      <p>Min</p>
                    </div>
                  </div>
                )
              }else{
                return(
                  <div key={key}>
                    <div>
                      <strong>{dia.dia_semana}</strong>
                      <p>{days && days[key].slice(0,5)}</p>
                    </div>
                    <div>
                      <img src={dia.icone} alt="Sunny"></img>
                    </div>
                    <div>
                      <strong>10&deg;</strong>
                      <p>Max</p>
                    </div>
                    <div>
                      <strong>21&deg;</strong>
                      <p>Min</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </WeekWeather>
      </Content>
    </Container>
  )
}