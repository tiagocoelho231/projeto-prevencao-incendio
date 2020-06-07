import React, { useEffect, useState } from 'react';
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

  const [weather, setWeather] = useState(false);
  //Chamada de api
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

  function risco(indice) {
    if (indice < 301) {
      return ("Nenhum");
    }
    if (indice < 501) {
      return ("Pequeno");

    }
    if (indice < 1001) {
      return ("Médio");

    }
    if (indice < 4001) {
      return ("Grande");

    }
    else {
      return ("Perigoso");

    }



  }
  function indiceInflamabilidade(temp_ar, tensao_max_vapor, tensao_real_vapor) {

    var defcit_saturacao = tensao_max_vapor - tensao_real_vapor;
    var indice_inflamabilidade = defcit_saturacao * temp_ar;
    return indice_inflamabilidade;



  }






  if (weather == false) {
    return (
      <div>


        Carregando o clima...
      </div>
    );
  } else {
    /*var temp_ar = 27.1;//Temperatura do ar
    var temp_PO;//Temperatura do Ponto de Orvalho
    var precipitacao_total;//Precipitação total
    var umidade = 49;//Umidade Relativa do ar
    var tensao_max_vapor = 35.9;//TENSÃO MÁXIMA DE VAPOR
    var tensao_real_vapor = 17.6;// TENSÃO REAL DE VAPOR
    var defcit_saturacao = tensao_max_vapor - tensao_real_vapor;//DÉFICIT DE SATURAÇÃO 
    var indice_inflamabilidade = defcit_saturacao * temp_ar; // Indice de imflamabilidade

    */
    var indice_inflamabilidade = indiceInflamabilidade(27.1, 35.9, 17.6);
    return (
      <div>
        <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>
        <hr />
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}°</li>
          <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
          <li>Temperatura minima: {weather['main']['temp_min']}°</li>
          <li>Pressão: {weather['main']['pressure']} hpa</li>
          <li>Humidade: {weather['main']['humidity']}%</li>
          <li>Indice de imflamabilidade:{indice_inflamabilidade}</li>
          <li>Risco de incêndio:{risco(indice_inflamabilidade)}</li>


        </ul>
      </div>
    );
  }






}

