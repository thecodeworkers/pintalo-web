import { inspoId } from '@utils/pageIds'

const inspo = `
  page(id: "${inspoId}") {
    title
    inspo {
      fieldGroupName
      postTitle
      subtitle
      title
      banner {
        mediaItemUrl
      }
    }
  }
`

export default inspo
