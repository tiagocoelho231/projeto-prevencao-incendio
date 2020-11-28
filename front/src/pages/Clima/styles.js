import styled from 'styled-components';

import { px2rem } from '../../util';

export const Container = styled.div`
  color: white;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgb(43, 50, 178) 0%,
    rgb(20, 136, 204) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 20px 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (min-width: 998px) {
    font-size: ${px2rem(20)};
  }

  @media screen and (max-width: 997px) {
    font-size: ${px2rem(16)};
  }
`;

export const LocationDate = styled.div`
  margin-bottom: 20px;
  width: 100%;
  h1 {
    font-size: ${px2rem(32)};
    font-weight: 600;
  }
`;

export const CurrentTemperature = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: ${px2rem(4)};
  padding-bottom: ${px2rem(12)};
  @media screen and (min-width: 998px) {
    width: 50%;
  }

  @media screen and (max-width: 997px) {
    width: 100%;
  }

  .img-wrapper {
    img {
      width: ${px2rem(158)};
      @media screen and (max-width: 550px) {
        width: ${px2rem(120)};
      }
    }
  }
  .temperature-wrapper {
    text-align: center;
    padding: 0 ${px2rem(25)};
    span {
      display: block;
      font-size: ${px2rem(25)};
      font-weight: 300;
      @media screen and (max-width: 550px) {
        font-size: ${px2rem(20)};
      }
    }
    strong {
      display: block;
      font-size: ${px2rem(70)};
      font-weight: 300;
      line-height: 1;
      margin-top: ${px2rem(5)};
      @media screen and (max-width: 550px) {
        font-size: ${px2rem(40)};
      }
    }
    p {
      text-align: center;
      margin-top: ${px2rem(8)};
    }
  }
`;

export const CurrentStats = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: ${px2rem(18)};
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 998px) {
    width: 50%;
    margin-bottom: ${px2rem(18)};
    padding-bottom: 0;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }

  > div {
    padding: 0 10px;
  }

  strong {
    display: block;
    text-align: center;
    margin-top: ${px2rem(18)};
    font-size: ${px2rem(25)};
    font-weight: 300;

    @media screen and (max-width: 550px) {
      font-size: ${px2rem(18)};
    }
  }

  p {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const InfoFogo = styled.div`
  display: grid;
  gap: ${px2rem(20)};
  padding: 20px 0;
  width: 100%;
  > div {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: ${px2rem(17)};
    > strong {
      display: block;
      text-align: center;
      font-size: ${px2rem(25)};
      font-weight: 300;
      &:not(:first-of-type) {
        margin-top: ${px2rem(18)};
      }
      @media screen and (max-width: 550px) {
        font-size: ${px2rem(18)};
      }
    }
    > p {
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
    > div {
      .baixo {
        color: #07cd56;
      }
      .medio {
        color: #fde101;
      }
      .alto {
        color: #ff6d0d;
      }
      .muito-alto {
        color: #fb003f;
      }
      justify-content: center;
      &:first-of-type {
        h1 {
          font-size: ${px2rem(50)};
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 997px) {
  }
`;

export const TodayWeather = styled.div`
  padding: 20px 0;
  width: 100%;
  h2 {
    color: rgba(255, 255, 255, 0.8);
    font-weight: normal;
    font-size: ${px2rem(20)};
    margin-bottom: ${px2rem(8)};
  }
  > div {
    display: grid;
    gap: ${px2rem(20)};

    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 997px) {
      flex-direction: column;
    }

    > div {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: ${px2rem(17)} ${px2rem(12)};
      @media screen and (max-width: 997px) {
        width: 100%;
      }
      strong {
        display: block;
        font-weight: 300;
        margin-bottom: ${px2rem(10)};
        font-size: ${px2rem(20)};
      }
      img {
        margin: 0 auto;
        margin-bottom: ${px2rem(13)};
      }
    }
  }
`;

export const WeekWeather = styled.div`
  padding: 20px 0;
  width: 100%;
  h2 {
    color: rgba(255, 255, 255, 0.8);
    font-size: ${px2rem(20)};
    font-weight: normal;
    margin-bottom: ${px2rem(8)};
  }
  > div {
    display: grid;
    gap: ${px2rem(20)};

    > div {
      display: grid;
      grid-gap: ${px2rem(20)};
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      padding: ${px2rem(17)};
      width: 100%;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: ${px2rem(21)};
      text-align: center;

      > div {
        align-items: center;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 600px) {
          margin-bottom: initial;
          strong {
            font-size: 18px;
          }
          img {
            margin: 0 auto;
            width: 80px;
          }
        }
      }
      p {
        color: rgba(255, 255, 255, 0.6);
      }

      @media screen and (min-width: 751px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (max-width: 750px) and (min-width: 361px) {
        grid-template-columns: repeat(2, 1fr);

        strong {
          font-size: 18px;
        }
        img {
          margin: 0 auto;
          width: 80px;
        }
      }
    }
  }
`;
