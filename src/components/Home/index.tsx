
import Head from 'next/head'
import { Hero, PromoSlide} from './elements'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Hero/>
      <PromoSlide/>
    </div>
  )
}

export default Home
