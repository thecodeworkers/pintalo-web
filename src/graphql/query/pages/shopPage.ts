import { shopId } from '@utils/pageIds'
const shop = `
shopPage: page(id: "${shopId}") {
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
