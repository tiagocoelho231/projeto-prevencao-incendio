import * as Yup from 'yup'

export default Yup.object().shape({
  login: Yup.string().required('Insira seu login'),
  password: Yup.string().required('Insira sua senha').min(6, 'Senha muito curta')
})