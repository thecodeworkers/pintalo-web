import Head from 'next/head'
import { Hero, Information } from './elements'

const About = ({ content }) => {
  console.log(content)
  return (
    <div>
      <Head>
        <title>Sobre Nosotros</title>
      </Head>
      <Hero data={content.mainBanner} />
      <Information data={content.information} />

    </div>
  )
}

export default About