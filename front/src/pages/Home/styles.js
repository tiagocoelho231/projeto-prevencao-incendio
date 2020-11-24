import styled from 'styled-components';

import { px2rem } from '../../util';


export const Content = styled.main`
  padding: ${px2rem(170)} ${px2rem(50)};
  a {
    display: block;
    font-size: ${px2rem(16)};
    font-weight: bold;
    color: #0080cd;
    padding-top: ${px2rem(20)};
  }
  strong {
    margin-right: ${px2rem(6)};
  }
`;

export const Weather = styled.div`
  max-width: ${px2rem(1000)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 997px){
    flex-direction: column;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: ${px2rem(16)};
  }

  h2 {
    color: rgb(0, 73, 131);

    span {
      color: rgb(160, 160, 160);
    }
  }

  li strong {
    color: rgb(0, 73, 131);
  }
`;

export const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${px2rem(400)};
  div {
    display: flex;
    align-items: center;
    margin-top: ${px2rem(25)};
    img {
      width: ${px2rem(125)};
      margin-right: ${px2rem(10)};
    }
    p {
      color: #000;
      font-size: ${px2rem(55)};
      font-weight: 700;
    }
  }
  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${px2rem(15)} 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
  }

  a {
    width: 100%;
  }
`;

export const Content2 = styled.div`
  max-width: ${px2rem(420)};
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${px2rem(30)};
    li {
      padding: ${px2rem(15)} 0;
      strong {
        color: #000;
      }
      a {
        text-align: center;
      }
      img {
        width: ${px2rem(195)};
        border-radius: 23px;
      }
    }
  }
`;

export const Content3 = styled.div`
  max-width: ${px2rem(350)};
  @media screen and (max-width: 997px){
    margin-top: ${px2rem(50)};
  }
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${px2rem(15)} 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
  }
`;

export const History = styled.div`
  max-width: 1200px;
  height: ${px2rem(230)};
  display: flex;
  flex-direction: column;
  margin: ${px2rem(50)} auto 0;

  h2 {
    color: rgb(0, 73, 131);
  }
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: ${px2rem(20)};
    > div {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: ${px2rem(12)};
      strong {
        color: #7a7a7a;
        font-size: ${px2rem(16)};
        margin-left: ${px2rem(8)};
      }
      > div {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          position: absolute;
          top: 0;
          left: 0;
          color: #464646;
          font-size: ${px2rem(16)};
        }
        span {
          width: ${px2rem(12)};
          height: 100%;
          background-color: #3080cd;
          border-radius: ${px2rem(10)};
          margin-top: ${px2rem(28)};
        }
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${px2rem(350)};
  p {
    color: #7a7a7a;
    font-size: ${px2rem(16)};
    text-align: center;
  }
  small {
    color: #7a7a7a;
    font-size: ${px2rem(14)};
    text-align: center;
    margin-top: ${px2rem(7)};
  }
`;