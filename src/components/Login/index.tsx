import Head from 'next/head'
import { LoginView } from './elements'

const Login = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Inicio de sesión</title>
      </Head>
      <LoginView />
    </div>
  )
}

export default Login
