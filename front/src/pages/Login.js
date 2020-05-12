import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import { px2rem } from '../util';
import { loginValidation } from '../validations';
import { CustomInput } from '../components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Page = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 800px;
`;

const Wrapper = styled.div`
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

const Button = styled.button`
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

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    if (auth.user) {
      history.push('');
    }
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    onSubmit: () => {
      dispatch.authentication.authenticate();
    },
    validateOnMount: true,
    validationSchema: loginValidation
  });

  return (
    <Page className="login-page">
      <Wrapper>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            error={formik.errors.login}
            label="Login"
            name="login"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            touched={formik.touched.login}
            type="text"
            value={formik.values.login}
          />
          <CustomInput
            error={formik.errors.password}
            label="Senha"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            touched={formik.touched.password}
            type="password"
            value={formik.values.password}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Wrapper>
    </Page>
  );
}
