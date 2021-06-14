import { Hero, List } from './elements'

const Painters = ({ content }) => {
  return (
    <div>
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
