import { useSelector, useDispatch } from 'react-redux'
import { FirstStep, SecondStep, ThirdStep, FourthStep } from './elements'
import { Stepper } from '@components'
import { setColor } from '@store/actions'
import styles from './styles.module.scss'

const Hero = ({ data }) => {
  const slide = useSelector((state: any) => state)
  const currentStep= slide.setColor.step
  const dispatch = useDispatch()

  const slider = (param) => {
    switch (param) {
      case 1:
        return <FirstStep data={data} />

      case 2:
        return <SecondStep data={data} />

      case 3:
        return <ThirdStep data={data} />

      case 4:
        return <FourthStep data={data} />

      default:
        return null
    }
  }

  const changeStep = (step) => {
    const indexStep = step + 1
    if (indexStep < currentStep) dispatch(setColor({ step: indexStep }))
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
              <Stepper currentStep={currentStep} length={4} onPress={(index: number) => changeStep(index)} />
            </div>
          </div>
        ) : null
      }
      <div className={styles._rollerBackground}></div>

      <style jsx>{`
        .${styles._rollerBackground} {
          background-image: url(${data?.background?.mediaItemUrl});
        }
      `}</style>
    </>
  )
}

export default Hero
