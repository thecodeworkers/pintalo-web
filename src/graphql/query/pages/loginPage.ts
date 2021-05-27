import { loginId } from '@utils/pageIds'

const login = `
  page(id: "${loginId}") {
    back {
      image {
        mediaItemUrl
        slug
      }
    }
  }
`

export default login
