import Head from 'next/head'
import { Hero } from './elements'

const Inspo = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Inspiración</title>
      </Head>
      <Hero />
    </div>
  )
}

export default Inspo
