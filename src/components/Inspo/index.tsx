import { Hero, Blog } from './elements'

const Inspo = ({ content }) => {
  const { page, posts } = content

  let mediaItemUrl = page?.inspo?.banner?.mediaItemUrl
  mediaItemUrl = mediaItemUrl ? mediaItemUrl : ''

  let entries = posts?.nodes
  entries = entries ? entries : []

  return (
    <div>
      <Hero title={page?.inspo?.title} subtitle={page?.inspo?.subtitle} bannerImage={mediaItemUrl} />
      <Blog title={page?.inspo?.postTitle} posts={entries} />
    </div>
  )
}

export default Inspo
