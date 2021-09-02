import { FC, memo } from 'react'
import { Button } from './type'
import ActivityIndicator from '../ActivityIndicator'

const helvetica20 = '1'
const width = '9.5rem'

const GeneralButton: FC<Button> = ({
  children,
  backgroundColor,
  textColor,
  method,
  bold,
  large = '2.5rem',
  type = 'button',
  showLoader = false,
  adjustWidth = false,
  formId = null
}) => (
  <>
    <button className="_button" onClick={method ? method : null} type={type} disabled={showLoader ? true : false} form={formId ? formId : null}>
      {
        showLoader ? (
          <ActivityIndicator/>
        ) : children
      }
    </button>

    <style jsx>{`
    ._button {
      width: ${adjustWidth ? '100%' : width};
      height: ${large};
      background-color: ${backgroundColor};
      color: ${textColor};
      border: none;
      cursor: ${showLoader ? 'none' : 'pointer'};
      font-size: ${helvetica20}rem;
      border-radius: 30px;
      font-family: ${!bold ? 'Helvetica' : 'Helvetica-bold'};
      font-weight: ${!bold ? 500 : 800};
    }
  `}</style>
  </>
)

export default memo(GeneralButton)
