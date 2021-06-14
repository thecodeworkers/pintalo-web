import { Hero, PromoSlide, ThirdBanner, FourthBanner} from './elements'

const Home = ({ content }) => (
  <div>
    {content ? (
      <>
        <Hero data={content?.mainBanner} />
        <PromoSlide />
        <ThirdBanner data={content?.thirdBanner} />
        <FourthBanner data={content?.fourthBanner} />
      </>
    ) : null}
  </div>
)

export default Home
