import { FC } from 'react'
import styles from './styles.module.scss'
import { stepperType } from './type';

const Stepper: FC<stepperType> = ({ length = 3, currentStep }) => (
  <div className={styles._stepper}>
    {
      Array.from(Array(length).keys()).map((index) => {
        const current = index + 1;
        return <div key={index} className={current == currentStep ? styles._currentStep : styles._step}></div>
      })
    }
  </div>
)

export default Stepper
