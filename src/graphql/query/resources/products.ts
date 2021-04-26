const inspoEntries = `
posts(first: 10000000) {
  nodes {
    id
    title
    inspo_entry {
      title
      subtitle
      content
      link
      image {
        id
        slug
        mediaItemUrl
      }
    }
  }
}
`

export default inspoEntries
