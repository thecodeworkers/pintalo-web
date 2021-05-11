import { FC } from 'react'
import styles from './styles.module.scss'
import { CounterButtonProps } from './types'

const CounterButton: FC<CounterButtonProps> = ({ direction, size, onPress }) => {
  return (
    <>
      <div className="_container" onClick={() => onPress(direction == '_left' ? -1 : 1)}>
        <i className={`${styles._arrow} ${direction}`}></i>
      </div>

      <style jsx>{`
        ._container {
          background-color: #FDCA40;
          width: ${size};
          height: ${size};
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default CounterButton
