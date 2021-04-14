import { useEffect} from 'react'
import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch,  useSelector } from 'react-redux'
import { setColor } from '../../../../store/actions'


const Hero = ({ data }) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const slide = useSelector((state: any) => state)
  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const setState =() =>{
   dispatch(setColor({ category: 'aceite', step:2}))
  }

  useEffect(() => {
    console.log(slide);

  }, [slide])

  const slider = (param) => {
    switch (param) {
      case 1:
        return (
          <div style={{height:'30vh'}}>
        <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
          bold={false} text={data?.secondButton?.button?.text}
          method={() => setState()} large={true} />
          </div>

        )
        break
      case 2:
        return (
          <p>hola2</p>
        )
        break
      case 3:
        return (
          <p>hola3</p>
        )
        break
      case 4:
        return (
          <p>hola4</p>
        )
        break

    }
  }
  return (
    <>
      <div className={'_main'}>
        {slider(1)}
      </div>
      <div className={'_rollerBackground'}></div>
      <style jsx>{`
    ._rollerBackground{
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 50vh;
    }
  `}</style>
    </>
  )
}
/*
const HeroImage  => () {
  return(
  <div className={styles._heroContainer}>
  <div className={styles._container}>
    <div className={styles._subtitleContainer}>
      <p className={styles._subtitle}>{data?.slogan}</p>
    </div>
    <p className={styles._title}>{data?.title}</p>
    <div className={styles._buttonContainer}>
      <div className={styles._content}>
        <p className={styles._buttonTitle}>{data?.firstButton?.title}</p>
        <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
          bold={false} text={data?.firstButton?.button?.text}
          method={() => navigation('/colors')} large={true} />
      </div>
      <div className={styles._content}>
        <p className={styles._buttonTitle}>{data?.secondButton?.title}</p>
        <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
          bold={false} text={data?.secondButton?.button?.text}
          method={() => navigation('/colors')} large={true} />
      </div>
    </div>
  </div>
</div>
)
}*/

export default Hero
