import { registerId } from '@utils/pageIds'

const register = `
  registerPage:page(id: "${registerId}") {
    back {
      image {
        mediaItemUrl
        slug
      }
    }
  }
`

export default register
