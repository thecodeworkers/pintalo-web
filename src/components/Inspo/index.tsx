import Head from 'next/head'
import { Hero, Blog } from './elements'

const Inspo = ({ content }) => {
  const { page: { inspo }, posts } = content

  let mediaItemUrl = inspo?.banner?.mediaItemUrl
  mediaItemUrl = mediaItemUrl ? mediaItemUrl : ''

  let entries = posts?.nodes
  entries = entries ? entries : []

  return (
    <div>
      <Head>
        <title>Inspiración</title>
      </Head>
      <Hero title={inspo?.title} subtitle={inspo?.subtitle} bannerImage={mediaItemUrl} />
      <Blog title={inspo?.postTitle} posts={entries} />
    </div>
  )
}

export default Inspo
