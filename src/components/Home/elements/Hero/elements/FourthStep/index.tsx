import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '@store/actions'
import { useRouter } from 'next/router'

const FourthStep = ({ data }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { product: { attributes: { customTypes: types } }, setColor: colorData } = useSelector((state: any) => state)

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const setState = (type) => {
    dispatch(setColor({ type: type }))
    navigation(`/shop?type=${type}&category=${colorData.category}&base=${colorData.base}`)
  }



  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>{data.titleStepFour}</p>
        <div className={styles._buttonContainer}>
          {
            types.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => setState(res.name)} large="2.2rem" adjustWidth>
                    <p className={styles._buttonText}>{res.name}</p>
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
