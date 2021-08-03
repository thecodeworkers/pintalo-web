import { FC } from 'react'
import { CounterButtonProps } from './types'

const CounterButton: FC<CounterButtonProps> = ({
  direction,
  size,
  onPress,
  backgroundColor = '#FDCA40',
  arrowColor = '#262833',
  arrowSize = '5px',
  arrowWidth = '4px'
 }) => {
  const orientation = direction.replace('_', '-')

  return (
    <>
      <div className="_container" onClick={() => onPress(direction == '_left' ? -1 : 1)}>
        <i className={`_arrow ${direction}`}></i>
      </div>

      <style jsx>{`
        ._container {
          background-color: ${backgroundColor};
          width: ${size};
          height: ${size};
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ._arrow {
          border: solid ${arrowColor};
          border-width: 0 ${arrowWidth} ${arrowWidth} 0;
          display: inline-block;
          padding: ${arrowSize};
          margin${orientation}: 4px;
        }
      `}</style>
    </>
  )
}

export default CounterButton
