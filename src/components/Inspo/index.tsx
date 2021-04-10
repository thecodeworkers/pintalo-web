import Head from 'next/head'
import { Hero, Blog } from './elements'

const Inspo = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Inspiración</title>
      </Head>
      <Hero />
      <Blog />
    </div>
  )
}

export default Inspo
