import Head from 'next/head'
import { Hero, Blog } from './elements'

const Inspo = ({ content }) => {
  const { title, subtitle, postTitle, banner: { mediaItemUrl } } = content

  return (
    <div>
      <Head>
        <title>Inspiración</title>
      </Head>
      <Hero title={title} subtitle={subtitle} bannerImage={mediaItemUrl ? mediaItemUrl : ''} />
      <Blog title={postTitle} />
    </div>
  )
}

export default Inspo
