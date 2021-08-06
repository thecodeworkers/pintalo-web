const products = `
products(first: 1000000) {
  nodes {
    id
    databaseId
    slug
    status
    sku
    totalSales
    type
    productCategories {
      nodes {
        id
        name
        slug
      }
    }
    ... on SimpleProduct {
      id
      name
      databaseId
      description
      status
      slug
      stockQuantity
      stockStatus
      image {
        mediaItemUrl
      }
    }
    ... on VariableProduct {
      name
      description
      attributes(first: 1000000) {
        nodes {
          name
          options
          label
          id
          ... on GlobalProductAttribute {
            slug
          }
        }
      }
      image {
        mediaItemUrl
        slug
      }
      price
      status
      stockQuantity
      stockStatus
      variations(first: 1000000) {
        nodes {
          databaseId
          description
          id
          image {
            mediaItemUrl
            slug
          }
          price
          status
          stockQuantity
          stockStatus
          attributes(first: 1000000) {
            nodes {
              name
              value
              label
              id
            }
          }
        }
      }
    }
  }
}
`

export default products
