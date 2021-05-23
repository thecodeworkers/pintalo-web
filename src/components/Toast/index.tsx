import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const currentClass = (status: number) => {
  if(status === 0) return styles._toast
  if(status === 1) return styles._toastIn
  if(status === 2) return styles._toastOut
}

const htmlDecode = (input) => {
  if (typeof window !== 'undefined') {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }
}

const Toast = () => {
  const { toast: { message, status } } = useSelector((state: any) => state.intermitence)

  return (
    <div className={currentClass(status)}>
      <div className={styles._content}>
        <img src="images/icons/cross.svg" width="20px" height="20px" alt="check"></img>
        <div dangerouslySetInnerHTML={{ __html: htmlDecode(message) }}></div>
      </div>
    </div>
  )
}

export default Toast
