import React, { useEffect } from 'react';
import styled from 'styled-components';

import { px2rem, sm2ha } from '../util';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LogoutButton = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 ${px2rem(8)} 0;
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto auto 0;
  padding: ${px2rem(20)};
  position: fixed;
  top: 0;
`;

const Total = styled.div`
  align-items: center;
  background-color: rgba(64, 0, 0, 0.8);
  border-radius: 0 0 0 ${px2rem(8)};
  color: #fff;
  display: flex;
  justify-content: center;
  padding: ${px2rem(20)};
  position: fixed;
  right: 0;
  top: 0;
`;

export default function Menu() {
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    dispatch.authentication.logout();
  }

  const auth = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    if (!auth.user) {
      history.push('/login');
    }
  }, [auth, history]);

  const image = useSelector(({ image }) => image);

  return (
    <>
      <Total>
        <p>
          Total de hectares queimados:{' '}
          {image.data.length > 0
            ? sm2ha(
                image.data.reduce(
                  (sum, result) => (sum += result.totalSquareMeters),
                  0
                )
              )
            : 0}
        </p>
      </Total>
      <LogoutButton onClick={() => logout()} type="button">
        Sair
      </LogoutButton>
    </>
  );
}
