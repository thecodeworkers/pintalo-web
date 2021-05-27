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
  posts(first: 9999) {
    nodes {
      inspo_entry {
        content
        fieldGroupName
        link
        subtitle
        title
        image {
          mediaItemUrl
        }
      }
    }
  }
`

export default inspo
