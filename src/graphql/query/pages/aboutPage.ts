import { aboutId } from '@utils/pageIds'

const about = `
  page(id: "${aboutId}") {
    about {
      mainBanner {
        background {
          id
          mediaItemUrl
          slug
        }
      }
      information {
        leftTitle
        leftDescription
        rightTitle
        rightDescription
      }
      brands {
        title
        description
        logo {
          id
          mediaItemUrl
          slug
        }
      }
    }
  }
`

export default about
