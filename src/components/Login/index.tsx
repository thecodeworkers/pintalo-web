import Head from 'next/head'
import { LoginView } from './elements'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <LoginView />
    </div>
  )
}

export default Home
