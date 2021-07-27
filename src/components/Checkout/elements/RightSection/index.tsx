import { GeneralButton } from '@components'
import { BasicInformation, AddressInformation, BudgetInformation } from './elements'
import styles from './styles.module.scss'

const title = {
  basicInformation: 'Tus datos',
  addressInformation: 'Delivery'
}

enum buttonTitle {
  'Siguiente',
  'Finalizar'
}

const RightSection = () => {
  return (
    <div className={styles._paymentSteps}>
      <div className={styles._paymentSteps_content}>
        <div className={styles._formContent}>
          <div className={styles._paymentSteps_header}>
            <p>{title.addressInformation}</p>
          </div>
          {/* <BasicInformation /> */}
          {/* <AddressInformation /> */}
          {/* <BudgetInformation /> */}
        </div>
        <div className={styles._formButtonContainer}>
          <GeneralButton
            backgroundColor="#FDCA40"
            textColor="#262833"
          >
            {buttonTitle[1]}
          </GeneralButton>
        </div>
      </div>
    </div>
  )
}

export default RightSection
