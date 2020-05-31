import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;

  img {
    margin: 0 auto;
    width: 100%;
  }
`;

export default function Clima() {
 
    const[weather,setWeather]=useState(false);

    let getWeather = async (lat, long) => {
      let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lat,
          lon: long,
          appid: '99af0e9ea489df1ee66b6156a9e06a4b',
          lang: 'pt',
          units: 'metric'
        }  
      });
      setWeather(res.data);
    }
    getWeather('-18.574313', '-46.514105');
    

    if (weather == false) {
    return (
      <div>
    
    
        Carregando o clima...
      </div>
    );
  } else {
    return (
      <div>
        <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>
        <hr/>
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}°</li>
          <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
          <li>Temperatura minima: {weather['main']['temp_min']}°</li>
          <li>Pressão: {weather['main']['pressure']} hpa</li>
          <li>Humidade: {weather['main']['humidity']}%</li>
        </ul>
        </div>
    );
    }
}
