import Head from 'next/head'
import { Hero, List } from './elements'

const Painters = ({ content }) => {

  return (
    <div>
      <Head>
        <title>Pintores</title>
      </Head>
      <Hero />
      <List />
    </div>
  )
}

export default Painters
