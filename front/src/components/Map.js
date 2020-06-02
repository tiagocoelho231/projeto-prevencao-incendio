import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;

  img {
    margin: 0 auto;
    width: 100%;
  }
`;

export default function Map() {
  const image = useSelector(({ image }) => image);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!image.data.length) {
      dispatch.image.fetch();
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  console.log('image', image);
  
  return (
    <Wrapper>
      {image.data && image.data.length > 0 && (
        <img src={image.data[image.data.length - 1].image} alt="Mapa" />
      )}
    </Wrapper>
  );
}
