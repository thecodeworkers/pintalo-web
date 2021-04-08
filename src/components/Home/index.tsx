
import Head from 'next/head'
import { Hero, SecondBanner } from './elements'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Hero/>
      <SecondBanner />
    </div>
  )
}

export default Home
