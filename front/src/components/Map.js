import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  img {
    height: 100%;
  }
`;

export default function Map() {
  const image = useSelector(({ image }) => image);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!image.data) {
      dispatch.image.fetch();
    }
  }, []);

  return (
    <Wrapper>
      <img src={require('../assets/map-placeholder.jpg')} alt="Mapa" />
    </Wrapper>
  );
}
