
import Head from 'next/head'
import { Stepper } from '@components'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div style={{width: '100px'}}>
         <Stepper length={4} currentStep={2}/>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Home
