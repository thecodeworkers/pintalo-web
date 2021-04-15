import Head from 'next/head'
import { Hero, List } from './elements'

const Painters = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Pintores</title>
      </Head>

      {
        content && (
          <>
          <Hero data={content?.mainBanner} />
          <List data={content?.painters}  />
          </>
        )
      }

    </div>
  )
}

export default Painters
