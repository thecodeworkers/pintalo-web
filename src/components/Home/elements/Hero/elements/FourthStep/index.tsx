import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setColor } from '@store/actions'
import { useRouter } from 'next/router'

const FourthStep = ({ data }) => {

  const dispatch = useDispatch()

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const setState = (type) => {
    dispatch(setColor({ type: type, }))
    navigation('/shop')
  }


  const type = [
    { name: 'Mate' },
    { name: 'Satinado' },
    { name: 'Brilliante' },
    { name: 'Masillas' },
    { name: 'Imperbealizantes' },
    { name: 'Aditivo' },
    { name: 'Texturizado' },
    { name: 'Grafeado' },
    { name: 'Tratamiento superficie' },
    { name: 'Otro' },
  ]


  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>Por base</p>
        <div className={styles._buttonContainer}>

          {
            type.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => setState(res.name)} large={true}>
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

export default FourthStep
