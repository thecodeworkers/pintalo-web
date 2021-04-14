import Head from 'next/head'
import { Hero, Information, Brands } from './elements'

const About = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Sobre Nosotros</title>
      </Head>
      <Hero data={content.mainBanner} />
      <Information data={content.information} />
      <Brands data={content.brands} />
    </div>
  )
}

export default About