import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  img {
    height: 100%;
  }
`;

export default function Map() {
  return (
    <Wrapper>
      <img src={require('../assets/map-placeholder.jpg')} alt="Mapa" />
    </Wrapper>
  );
}
