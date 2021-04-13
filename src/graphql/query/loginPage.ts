import { loginId } from '@utils/pageIds'

const login = `
  loginPage:page(id: "${loginId}") {
    back {
      image {
        mediaItemUrl
        slug
      }
    }
  }
`

export default login
