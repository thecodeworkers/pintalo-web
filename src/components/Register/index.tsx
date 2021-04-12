import Head from 'next/head'
import { RegisterView } from './elements'

const Register = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Registro</title>
      </Head>
      <RegisterView data={content}/>
    </div>
  )
}

export default Register
