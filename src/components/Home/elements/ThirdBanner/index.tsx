import { FirstBanner, SecondBanner } from './elements'

const ThirdBanner = ({ data }) => {

  return (
    <>
      <FirstBanner data={data?.firstBanner} />
      <SecondBanner data={data?.secondBanner} />
    </>
  )
}

export default ThirdBanner
