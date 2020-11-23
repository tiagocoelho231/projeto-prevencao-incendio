import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loginValidation } from '../../validations';
import { CustomInput } from '../../components';

import { Page, Wrapper, Button } from './styles';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    if (auth.user) {
      history.push('');
    }
  }, [auth, history]);

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
