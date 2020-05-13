import React, { useEffect } from 'react';
import styled from 'styled-components';

import { px2rem } from '../util';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 16, 0.9);
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: ${px2rem(50)} ${px2rem(20)};
  position: absolute;
  top: 0;
  width: ${px2rem(300)};

  h1 {
    text-align: center;
  }

  a {
    align-items: center;
    border: ${px2rem(2)} solid #fff;
    border-radius: ${px2rem(20)};
    display: flex;
    font-size: ${px2rem(16)};
    height: ${px2rem(40)};
    justify-content: center;
    margin-top: ${px2rem(30)};
    padding: 0 ${px2rem(20)};
    text-align: center;
  }
`;

const LogoutButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto auto 0;
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

  return (
    <Wrapper>
      <h1>Mapa</h1>
      <Link to="/historico">Histórico de Queimadas</Link>
      <LogoutButton onClick={() => logout()} type="button">
        Sair
      </LogoutButton>
    </Wrapper>
  );
}
