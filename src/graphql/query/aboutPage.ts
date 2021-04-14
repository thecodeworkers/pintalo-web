import { aboutId } from '@utils/pageIds'

const about = `
  aboutPage:page(id: "${aboutId}") {
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
      content {
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
