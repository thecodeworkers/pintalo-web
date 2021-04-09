import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const ThirdBanner = () => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const allies = [
    {
      name:'VP Super Kentone',
    },
    {
      name:'Alpha',
    },
    {
      name:'Pineco Prestige ',
    },
    {
      name:'Manpica Mastic 5000',
    },
    {
      name:'Butler tools',
    },
    {
      name:'Montana AV 2000',
    }
  ]

  return (
    <>

        <div className={'_main'}>
          <div className={styles._container}>
          <div className ={styles.alliesContainer}>
          {
            allies.map(res => {
              return(
                <div className ={styles.allies}>
                  <p>{res.name}</p>
                </div>
              )

            })
          }
        </div>
        </div>
        </div>
        <div className={'_aboutBackground'}/>
      <style jsx>{`
        ._aboutBackground{
           background-image: url(./images/about-home.png);
           background-repeat: no-repeat;
           background-size: 100% 100%;
           width:50%;
           height: 40vh;
        }
      `}</style>
    </>
  )
}

export default ThirdBanner
