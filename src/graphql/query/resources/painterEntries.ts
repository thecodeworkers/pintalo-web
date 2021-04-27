const painters = `
painters(first: 10000000) {
    nodes {
      id
      slug
      painters_entry {
        name
        personalInformation
        image {
          mediaItemUrl
          mediaType
        }
      }
    }
  }
`

export default painters
