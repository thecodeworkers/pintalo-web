import { shopId } from '@utils/pageIds'

const shop = `
  page(id: "${shopId}") {
    id
    title
    shop {
      title
      banner {
        id
        slug
        mediaItemUrl
      }
    }
  }
`

export default shop
