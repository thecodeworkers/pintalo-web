import { useCallback } from 'react'
import { Hero, PromoSlide, ThirdBanner, FourthBanner } from './elements'
import { useSelector } from 'react-redux'
import { scrollTo } from '@utils/common'

const Home = ({ content }) => {

  const { scrollReference: { homeReference } } = useSelector((state: any) => state)

  const promotionsRef = useCallback((node) => {
    scrollingReference(node, 'promotions')
  }, [homeReference?.promotions])

  const scrollingReference = (node, state, offset = 0) => {
    if (homeReference?.current == state) {
      if (node) scrollTo(node, offset)
    }
  }

  return (
    <div>
      {content ? (
        <>
          <Hero data={content?.mainBanner} />
          <PromoSlide reference={promotionsRef} />
          <ThirdBanner data={content?.thirdBanner} />
          <FourthBanner data={content?.fourthBanner} />
        </>
      ) : null}
    </div>
  )
}

export default Home
