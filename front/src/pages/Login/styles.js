import styled from 'styled-components';

import { px2rem } from '../../util';

export const Page = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 800px;
`;

export const Wrapper = styled.div`
  border-radius: ${px2rem(20)};
  box-shadow: ${px2rem(15)} ${px2rem(8)} ${px2rem(25)} rgba(0, 0, 0, 0.2);
  padding: ${px2rem(40)};

  h1 {
    margin-bottom: ${px2rem(30)};
    text-align: center;
  }

  form {
    > div:not(:last-of-type) {
      margin-bottom: ${px2rem(20)};
    }
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: deepskyblue;
  border-radius: ${px2rem(40)};
  color: #fff;
  display: flex;
  height: ${px2rem(40)};
  justify-content: center;
  margin: ${px2rem(30)} auto 0;
  padding: 0 ${px2rem(20)};
`;
