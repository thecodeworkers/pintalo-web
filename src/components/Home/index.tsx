import Head from 'next/head'
import { Hero, PromoSlide, ThirdBanner, FourthBanner} from './elements'

const Home = ({ content }) => (
  <div>
     <Head>
      <title>Pintalo</title>
    </Head>
    {content ? (
      <>
        <Hero data={content?.mainBanner} />
        <PromoSlide />
        {/* <ThirdBanner data={content?.thirdBanner} /> */}
        {/* <FourthBanner data={content?.fourthBanner} /> */}
      </>
    ) : null}
  </div>
)

export default Home
