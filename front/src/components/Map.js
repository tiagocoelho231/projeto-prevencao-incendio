import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { sm2ha, px2rem } from '../util';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 16, 0.9);
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: ${px2rem(20)};
  position: absolute;
  right: 0;
  width: 100%;
`;

export default function Map() {
  const image = useSelector(({ image }) => image);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!image.data.length) {
      dispatch.image.fetch();
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      {image.data.map((result, index) => (
        <ImageWrapper key={index}>
          <img src={result.image} alt={`Mapa ${index + 1}`} />
          <ImageOverlay>
            <p>Área queimada: {sm2ha(result.totalSquareMeters)} hectares</p>
          </ImageOverlay>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
}
