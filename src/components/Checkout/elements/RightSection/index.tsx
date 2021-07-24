import { GeneralButton } from '@components'
import { BasicInformation, AddressInformation } from './elements'
import styles from './styles.module.scss'

const RightSection = () => {
  return (
    <div className={styles._paymentSteps}>
      <div className={styles._paymentSteps_content}>
        <div className={styles._formContent}>
          <div className={styles._paymentSteps_header}>
            <p>Tus datos</p>
          </div>
          {/* <BasicInformation /> */}
          <AddressInformation />
        </div>
        <div className={styles._formButtonContainer}>
          <GeneralButton
            backgroundColor="#FDCA40"
            textColor="#262833"
          >
            Siguiente
          </GeneralButton>
        </div>
      </div>
    </div>
  )
}

export default RightSection
