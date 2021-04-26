import { inspoId } from '@utils/pageIds'
const inspo = `
inspoPage: page(id: "${inspoId}") {
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

export default inspo
