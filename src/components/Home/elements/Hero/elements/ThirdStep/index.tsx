
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../../../../../store/actions'

const ThirdStep = ({ data }) => {

  const dispatch = useDispatch()
  const slide = useSelector((state: any) => state)
  const currentStep = slide.setColor.step


  const setState = (base) => {
    dispatch(setColor({ base: base, step: currentStep + 1 }))
  }


  const base = [
    { name: 'Caucho' },
    { name: 'Esmalte' },
    { name: 'Fondo' },
    { name: 'Barniz' },
    { name: 'Sistema acrilico' },
    { name: 'Sistema nitro' },
    { name: 'Sistema 2k' },
    { name: 'Autopartes' },
    { name: 'Autopartes' },
  ]


  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>Por base</p>
        <div className={styles._buttonContainer}>

          {
            base.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => setState(res.name)} large="2.2rem">
                    {res.name}
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
