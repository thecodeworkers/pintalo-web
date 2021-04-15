import { useSelector } from 'react-redux'
import { FirstStep, SecondStep, ThirdStep, FourthStep } from './elements'
import { Stepper } from '@components'
import styles from './styles.module.scss'


const Hero = ({ data }) => {

  const slide = useSelector((state: any) => state)
  const currentStep= slide.setColor.step

  const slider = (param) => {
    switch (param) {
      case 1:
        return (
          <FirstStep data={data}/>
        )
        break
      case 2:
        return (
         <SecondStep data={data}/>
        )
        break
      case 3:
        return (
          <ThirdStep data={data}/>
        )
        break
      case 4:
        return (
          <FourthStep data={data}/>
        )
        break

    }
  }
  return (
    <>
      <div className={'_main'}>
        {slider(currentStep)}
      </div>

        {
          currentStep != 1 ?
          (
            <div className={styles._stepperContainer}>
            <div className={styles._stepper}>
            <Stepper currentStep={currentStep} length={4} />
            </div>
            </div>
          ): null
        }

      <div className={'_rollerBackground'}></div>
      <style jsx>{`
    ._rollerBackground{
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 50vh;
    }
  `}</style>
    </>
  )
}


export default Hero
