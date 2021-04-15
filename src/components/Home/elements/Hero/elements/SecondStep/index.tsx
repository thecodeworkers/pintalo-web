
import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch,  useSelector } from 'react-redux'
import { setColor } from '../../../../../../store/actions'
import { useState } from 'react'

const SecondStep = ({ data }) => {

  const router = useRouter()

  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const slide = useSelector((state: any) => state)
  const currentStep= slide.setColor.step


  const setState =(category) =>{
    setActive(true)
    dispatch(setColor({ category: category, step:currentStep+1}))
   }


  const category = [
    { name: 'Arquitectónico' },
    { name: 'Industrial' },
    { name: 'Automotriz' },
    { name: 'Herramientas' },
    { name: 'Madera' },
    { name: 'Solventes' },
    { name: 'Mantenimiento bajo' },
    { name: 'Mantenimiento alto' },
  ]


  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>Por categoria</p>
        <div className={styles._buttonContainer}>

            {
              category.map((res, index) => {
                return (
                  <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={active ? '#FDCA40' :'#262833'} textColor={'#fff'}
                    bold={true} text={res.name}
                    method={() => setState(res.name)} large={true} />
                  </div>
                )
              })
            }
        </div>

      </div>
    </div>
  )
}

export default SecondStep
