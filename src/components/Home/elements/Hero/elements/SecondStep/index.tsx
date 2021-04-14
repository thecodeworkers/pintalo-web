
import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const SecondStep = ({ data }) => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
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
                  <div className={styles._content}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                    bold={false} text={res.name}
                    method={() => navigation('/colors')} large={true} />
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
