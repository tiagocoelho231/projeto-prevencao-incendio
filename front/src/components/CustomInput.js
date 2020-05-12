import React from 'react';
import { px2rem } from '../util';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    border-radius: ${px2rem(8)};
    box-shadow: ${px2rem(2)} ${px2rem(3)} ${px2rem(10)} rgba(0, 0, 0, 0.1);
    height: ${px2rem(40)};
    padding: 0 ${px2rem(10)};
    width: 100%;
  }

  .error {
    color: red;
    font-size: ${px2rem(12)};
    left: 0;
    position: absolute;
    top: 100%;
  }
`;

export default function CustomInput({ error, label, touched, ...props }) {
  return (
    <Wrapper>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
      {touched && error && <span className="error">{error}</span>}
    </Wrapper>
  );
}
