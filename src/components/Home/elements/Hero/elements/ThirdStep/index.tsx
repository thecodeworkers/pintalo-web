
import { GeneralButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '@store/actions'
import styles from './styles.module.scss'

const ThirdStep = ({ data }) => {
  const dispatch = useDispatch()
  const { setColor: { step }, product: { attributes: { bases } } } = useSelector((state: any) => state)
  const currentStep = step

  const setState = (base) => {
    dispatch(setColor({ base: base, step: currentStep + 1 }))
  }

  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>{data.titleStepThree}</p>
        <div className={styles._buttonContainer}>

          {
            bases.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => setState(res.name)} large="2.2rem" adjustWidth>
                    <p className={styles._buttonText}>{res.name}</p>
                  </GeneralButton>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default ThirdStep
