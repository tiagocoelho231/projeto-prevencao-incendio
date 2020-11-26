import styled from 'styled-components';

import { px2rem } from '../../util';

export const Container = styled.div`
  color: white;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, rgb(43,50,178) 0%, rgb(20,136,204) 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 920px) {
    width: 880px;
    font-size: 1.1em;
    margin: 8px auto;
  }
`;

export const LocationDate = styled.div`
  width: 100%;
  h1{
    margin: 0;
    font-size: ${px2rem(32)};
    font-weight: 600;
  }
`;

export const CurrentTemperature = styled.div`
  display: flex;
  margin-top: ${px2rem(4)};
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 50%;
  }
  .img-wrapper{
    flex-grow: 1.25;
    text-align: center;
    img{
      width: ${px2rem(168)};
    }
  }
  .temperature-wrapper{
    flex-grow: 1;
    text-align: center;
    strong{
      font-size: ${px2rem(92)};
      font-weight: 300;
    }
    p{
      margin-top: ${px2rem(-9)};
      margin-left: ${px2rem(-12)};
      text-align: center;
      font-size: ${px2rem(20)};
    }
  }
`;

export const CurrentStats = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: ${px2rem(18)};
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.5);

  @media screen and (min-width: 700px) {
    width: 50%;
    margin-bottom: ${px2rem(18)};
    padding-bottom: 0;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid rgba(255,255,255,0.5);
  }
  strong{
    display: block;
    margin-top: ${px2rem(18)};
    font-size: ${px2rem(25)};
    font-weight: 300;
  }
  p{
    color: rgba(255,255,255,0.6);
  }
`;


export const TodayWeather = styled.div`
  display: none;
  width: 100%;
  @media screen and (min-width: 700px) {
    display: block;
  }
  h2{
    color: rgba(255,255,255,0.8);
    font-size: ${px2rem(18)};
    font-weight: normal;
    @media screen and (min-width: 768px) {
      font-size: ${px2rem(20)};
    }
  }
  >div{
    display: flex;
    justify-content: space-between;
    >div{
      padding: ${px2rem(17)} 0;
      width: 13%;
      border-radius: 5px;
      background-color: rgba(0,0,0,0.15);
      font-size: ${px2rem(20)};
      text-align: center;
      strong{
        display: block;
        font-weight: 300;
        margin-bottom: ${px2rem(10)};
      }
    }
  }
`;

export const WeekWeather = styled.div`
  width: 100%;
  margin-top: 1em;
  h2{
    color: rgba(255,255,255,0.8);
    font-size: ${px2rem(18)};
    font-weight: normal;
    @media screen and (min-width: 768px) {
      font-size: ${px2rem(20)};
    }
  }
  >div{
    display: flex;
    flex-wrap: wrap;
    >div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: ${px2rem(17)} 0;
      width: 100%;
      border-radius: 5px;
      background-color: rgba(0,0,0,0.20);
      font-size: ${px2rem(21)};
      text-align: center;
      strong{
        width: 33.33333%;
        @media screen and (min-width: 450px) {
          width: 16.666666%;
          margin-bottom: initial;
        }
      }
      p{
        color: rgba(255,255,255,0.6);
        font-size: ${px2rem(16)};
      }
    }
  }
`;