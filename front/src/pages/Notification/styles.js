import styled from 'styled-components';

import { px2rem } from '../../util';


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${px2rem(80)} ${px2rem(40)};
    li {
      width: 100%;
      height: ${px2rem(140)};
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        border-bottom: 1px solid #aaaaaa;
      }

      > div {
        margin-right: ${px2rem(14)};
      }
      > p {
        color: #757575;
      }
    }
  }
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ececec;
  width: ${px2rem(80)};
  height: ${px2rem(80)};
  p {
    color: #757575;
  }
  strong {
    color: #757575;
  }
`;

export const WeatherIcon = styled.div`
  max-width: ${px2rem(80)};
  img {
    width: 100%;
  }
`;

export const MaxMin = styled.div`
  span {
    color: #000;
  }
  strong {
    color: #757575;
  }
`;