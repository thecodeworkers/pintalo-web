
import Head from 'next/head'
import { Hero, PromoSlide, ThirdBanner} from './elements'


const Home = ({ content }) => {


  return (
    <div>
       <Head>
        <title>Pintalo</title>
      </Head>
      {content ? (<>
      <Hero data={content?.mainBanner}/>
      <PromoSlide />
      <ThirdBanner data={content?.thirdBanner}/>
      </>) : null}
    </div>
  )
}

export default Home
