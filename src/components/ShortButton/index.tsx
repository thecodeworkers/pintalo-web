import { FC } from 'react'
import { Button } from './type'

const helvetica20 = '1'

const ShorButton: FC<Button> = ({ text, backgroundColor, textColor, method, bold }) => (
  <>
    <button className='_button' onClick={method ? method : null}> {text} </button>
    <style jsx>{`
    ._button{
      width: 100%;
      height: 2rem;
      background-color: ${backgroundColor};
      color: ${textColor};
      border: none;
      cursor: pointer;
      font-size: ${helvetica20}rem;
      border-radius: 30px;
      font-family: ${ !bold ? 'Helvetica': 'Helvetica-bold'};
      font-weight: ${ !bold ? 500 : 800};
    }
  `}</style>
  </>
)

export default ShorButton
