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
      missionVision {
        title
        description
      }
      whoWeAre {
        title
        description
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
