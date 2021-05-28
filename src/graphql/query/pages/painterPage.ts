import { painterdId } from '@utils/pageIds'

const painter = `
  page(id: "${painterdId}") {
    painters {
      mainBanner {
        background {
          mediaItemUrl
        }
        title
      }
      painters {
        title
        painters {
          name
          personalInformation
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
`
export default painter
