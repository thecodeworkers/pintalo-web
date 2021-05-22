import { registerId } from '@utils/pageIds'

const register = `
  page(id: "${registerId}") {
    back {
      image {
        mediaItemUrl
        slug
      }
    }
  }
`

export default register
